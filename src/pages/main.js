import React from 'react'
import { Link } from 'react-router-native'
import { Text, View } from 'react-native'
import styles from '../styles';

class Main extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.maincontent}>
                    <Text style={styles.maintext}>Hello</Text>
                    <Link style={styles.mainLink} to='/Slider'>
                        <Text style={styles.maintext2}>Слайдер</Text>
                    </Link>
                </View>
            </View>
            
        )
    }
}

export default (Main);