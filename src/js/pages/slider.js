import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/index.scss';
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { bindActionCreators } from 'redux';

class Slider extends React.Component {
    async imgFunc() {
        let response = await fetch('https://imagesapi.osora.ru/');
        console.log(response.json());
    }
    render() {
        return (
            <div className='page'>
                <div className='sliderWrapper'>
                    <div className='button' onClick={this.props.prev_img}>prev</div>
                    <img className="slider" src={this.props.local[this.props.imgId]} alt=""/>
                    <div className='button' onClick={this.props.next_img}>next</div>
                </div>
                <div className="button button_switch" onClick={this.imgFunc}>switch to remote</div>
                <Link to='/main'>back to main</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        imgId: state.imgId,
        local: state.local
    };
} 

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);