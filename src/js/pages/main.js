import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'
import { connect } from 'react-redux';
import { actions } from '../redux/actions';
import { bindActionCreators } from 'redux';

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='content'>
                    <div className='text' >Hello</div>
                    <Link to='/slider'>Слайдер</Link>
                    <div className='counter'>
                      <button onClick={this.props.decrement}>-</button>
                      <span>{this.props.count}</span>
                      <button onClick={this.props.increment}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      count: state.count
    };
} 

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(Main);