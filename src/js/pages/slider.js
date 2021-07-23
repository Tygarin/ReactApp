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
            source : 'remote'
        }
    }
    async componentDidMount() {
        let response = await fetch('https://imagesapi.osora.ru/');
        let Respjson = await response.json()
        console.log(Respjson);
        this.props.takeImgSuccess(Respjson)
        console.log(this.props.remote);
    }
    nextImg = () => {
        let count = this.props.imgId
        this.props.setLength(count+=1)

        if(this.props.imgId > 1) {
            this.props.setLength(0)
            console.log('s');
        }
    }
    prevImg = () => {
        let count = this.props.imgId
        this.props.setLength(count-=1)

        if(this.props.imgId < 1) {
            console.log('d');
            this.props.setLength(2)
        }
    }
    onChangeSlider = () => {
        if(this.state.source === 'local') {
            this.setState({source:'remote'})
        } else {
            this.setState({source:'local'})
        }
        console.log(this.state.source);
    }
    render() {
        return (
            <div className='page'>
                <div className='sliderWrapper'>
                    <div className='button' onClick={this.props.prev_img && this.prevImg}>prev</div>
                    {
                    this.state.source === 'remote' ? 
                    <img className="slider" src={this.props.local[this.props.imgId]} alt=""/> : 
                    <img className="slider" src={this.props.remote[this.props.imgId]} alt=""/>
                    }
                    <div className='button' onClick={this.props.next_img && this.nextImg}>next</div>
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