import React from 'react';
import { AppState, Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { bindActionCreators } from 'redux';
import songs from '../data'
import { EventRegister } from 'react-native-event-listeners';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioId: 1,
      pause: false,
      authors: '',
      appState: AppState.currentState
    }
  }

  async componentDidMount() {
    let response = await fetch('https://imagesapi.osora.ru/?isAudio=true');
    let Respjson = await response.json()
    await this.props.takeAudioSuccess(Respjson)
    console.log(this.props.audioRemote);
    this.start()
    TrackPlayer.updateOptions({
      stopWithApp: true,
      alwaysPauseOnInterruption: true,
      capabilities: [
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      ]
    });
    TrackPlayer.registerPlaybackService(() => require('../service'));
    AppState.addEventListener("change", this._handleAppStateChange);

    songs.push(
      {
        url: urls[3],
        title: allAuthors[3]
      },
      {
        url: urls[4],
        title: allAuthors[4]
      },
      {
        url: urls[5],
        title: allAuthors[5]
      }
    );
  }

  componentWillUnmount() {
    TrackPlayer.destroy();
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  start = async () => {
    console.log(this.state);
    let urls = []
    Object.values(this.props.audioLocal).map((e) => urls.push(e))
    this.props.audioRemote.map((e) => urls.push(e))

    let allAuthors = []
    Object.keys(this.props.audioLocal).map((e) => allAuthors.push(e))
    let remoteAuthors = ['Моргешер', 'Slawa Marlow', 'Тима белорусских']
    remoteAuthors.map((e) => allAuthors.push(e))

    await TrackPlayer.setupPlayer();
    
    await TrackPlayer.add(songs)

    await TrackPlayer.play();
    this.setState({
      authors: allAuthors[this.state.audioId]
    })

  };

  onPause = async () => {
    if (this.state.pause == false) {
      await TrackPlayer.pause();
      this.setState({ pause: true })
    } else {
      await TrackPlayer.play();
      this.setState({ pause: false })
    }
  }

  onNext = () => {
    let id = this.state.audioId
    this.setState({
      audioId: id + 1
    })

    if (id > 4) {
      this.setState({ audioId: 0 })
    }
    this.setState({ pause: false })
    this.start()
  }

  onPrev = () => {
    let id = this.state.audioId
    this.setState({
      audioId: id - 1
    })

    if (id < 1) {
      this.setState({ audioId: 5 })
    }
    this.setState({ pause: false })
    this.start()
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    } else {
      this.onPause()
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return (
      <View style={styles.player}>
        <Text style={styles.authors}>{this.state.authors}</Text>
        <View style={styles.playerNav}>
          <TouchableOpacity onPress={this.onPrev}>
            <Image style={styles.playerImg} source={require('../img/prev.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.start && this.onPause}>
            {
              this.state.pause == false ?
                <Image style={styles.playerImg} source={require('../img/pause.png')}></Image>
                :
                <Image style={styles.playerImg} source={require('../img/play.png')}></Image>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onNext}>
            <Image style={styles.playerImg} source={require('../img/next.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);