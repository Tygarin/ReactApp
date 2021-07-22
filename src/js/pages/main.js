import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='content'>
                    <div className='text' >Hello</div>
                    <Link to='/slider'>Слайдер</Link>
                    <div className='counter'>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Main);