import React from 'react';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source : 'remote',
            imgId  : 0 
        };
    }
    async componentDidMount() {
        let response = await fetch('https://imagesapi.osora.ru/');
        let Respjson = await response.json()
        console.log(Respjson);
        this.props.takeImgSuccess(Respjson)
    }
    nextImg = () => {
        let count = this.state.imgId
        count+=1
        console.log(count);
        this.setState({imgId : count}) 

        if(this.state.imgId > 1) {
            this.setState({imgId : 0}) 
        }
    }
    prevImg = () => {
        let count = this.state.imgId
        count -= 1
        this.setState({imgId : count}) 

        if(this.state.imgId < 1) {
            this.setState({imgId : 2}) 
        }
    }
    onChangeSlider = () => {
        if(this.state.source === 'local') {
            this.setState({source:'remote'})
        } else {
            this.setState({source:'local'})
        }
    }
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.sliderWrapper}>
                    <Button style={styles.button} onPress={this.prevImg} title='Prev' />
                    {
                        this.state.source === 'remote' ? 
                        <Image style={styles.slideImg} source={this.props.local[this.state.imgId]}></Image> 
                        : 
                        <Image style={styles.slideImg} source={{uri: this.props.remote[this.state.imgId]}}></Image>
                    }
                    <Button style={styles.button} onPress={this.nextImg} title='Next' />
                </View>
                <View style={styles.pageBottomNav}>
                    <TouchableOpacity onPress={this.onChangeSlider}>
                        <Text style={styles.switchbtn}>
                            switch to {this.state.source}
                        </Text>
                    </TouchableOpacity >
                    <Link to='/' style={styles.backbtn}>
                        <Text>back to main</Text>
                    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Slider);