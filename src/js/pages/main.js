import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/main.scss'

class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='content'>
                    <h2>Hello</h2>
                    <Link to='/slider'>Слайдер</Link>
                </div>
            </div>
        )
    }
}

export default Main