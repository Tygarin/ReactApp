import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'
import { connect } from 'react-redux';

class Main extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
  
    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }

    render() {
        return (
            <div className='main'>
                <div className='content'>
                    <div className='text' >Hello</div>
                    <Link to='/slider'>Слайдер</Link>
                    <div className='counter'>
                      <button onClick={this.decrement}>-</button>
                      <span>{this.props.count}</span>
                      <button onClick={this.increment}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
} 

export default connect(mapStateToProps)(Main);