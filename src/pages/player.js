import React from 'react';
import { AppState, Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';
import songs from '../data'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
      author: '',
      appState: AppState.currentState
    }
  }

  async componentDidMount() {
    let response = await fetch('https://imagesapi.osora.ru/?isAudio=true');
    let Respjson = await response.json()

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

    let urls = []
    Respjson.map((e) => urls.push(e))

    let allAuthors = []
    let remoteAuthors = ['Моргешер', 'Slava Marlow', 'Тима белорусских']
    remoteAuthors.map((e) => allAuthors.push(e))

    await TrackPlayer.setupPlayer();

    if (songs.length <= 3) {
      songs.push(
        {
          id: 3,
          url: urls[0],
          title: allAuthors[0]
        },
        {
          id: 4,
          url: urls[1],
          title: allAuthors[1]
        },
        {
          id: 5,
          url: urls[2],
          title: allAuthors[2]
        }
      );
      console.log(songs);
    }

    await TrackPlayer.add(songs)

    this.refresh()
    this.start()
    setInterval(() => {
      this.refresh()
    }, 1000)
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    TrackPlayer.pause()
  }

  start = async () => {
    await TrackPlayer.play();
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

  refresh = async () => {
    let trackIndex = await TrackPlayer.getCurrentTrack();
    let trackObject = await TrackPlayer.getTrack(trackIndex);
    this.setState({
      author: trackObject.title
    })
  }

  onNext = async () => {
    TrackPlayer.skipToNext()
    this.refresh()
  }

  onPrev = async () => {
    TrackPlayer.skipToPrevious()
    this.refresh()
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
        <Text style={styles.authors}>{this.state.author}</Text>
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

export default (Player);