import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/index.scss';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { bindActionCreators } from 'redux';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeSlider = this.onChangeSlider.bind(this)
    }
    async componentDidMount() {
        let response = await fetch('https://imagesapi.osora.ru/');
        let Respjson = await response.json()
        console.log(Respjson);
        this.props.takeImgSuccess(Respjson)
        console.log(this.props.remote);
    }
    onChangeSlider() {
        if(this.props.source === 'local') {
            this.props.changeSlider('remote')
        } else {
            this.props.changeSlider('local')
        }
        console.log(this.props.source);
    }
    render() {
        return (
            <div className='page'>
                <div className='sliderWrapper'>
                    <div className='button' onClick={this.props.prev_img}>prev</div>
                    {this.props.source === 'local' ? <img className="slider" src={this.props.local[this.props.imgId]} alt=""/> : <img className="slider" src={this.props.remote[this.props.imgId]} alt=""/>}
                    <div className='button' onClick={this.props.next_img}>next</div>
                </div>
                <div className="button button_switch" onClick={this.onChangeSlider}>switch to remote</div>
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