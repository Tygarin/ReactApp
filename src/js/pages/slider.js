import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/index.scss';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { bindActionCreators } from 'redux';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source : 'remote',
            imgId  : 0 
        }
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
            <div className='page'>
                <div className='sliderWrapper'>
                    <div className='button' onClick={this.prevImg}>prev</div>
                    {
                    this.state.source === 'remote' ? 
                    <img className="slider" src={this.props.local[this.state.imgId]} alt=""/> : 
                    <img className="slider" src={this.props.remote[this.state.imgId]} alt=""/>
                    }
                    <div className='button' onClick={this.nextImg}>next</div>
                </div>
                <div className="button button_switch" onClick={this.onChangeSlider}>switch to {this.state.source}</div>
                <Link to='/main'>back to main</Link>
            </div>
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