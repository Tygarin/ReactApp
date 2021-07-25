import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
  BackHandler,
  Linking
} from 'react-native';
import styles from './styles';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';
import Slider from './pages/slider';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './redux/reducers';
import Main from './pages/main';

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route path='/Slider'>
              <Slider/>
            </Route>
          </Switch>
          <View style={styles.nav}>
            <Link style={styles.btn} to='/'><Text>Home</Text></Link>
            <Link style={styles.btn} to='/Slider'><Text>Slider</Text></Link>
            <Link style={styles.btn} to='/Slider'><Text>Player</Text></Link>
            <Link style={styles.btn} to='/Slider'><Text onPress={() => Linking.openURL('https://q-digital.org')}>Browser</Text></Link>
            <Link style={styles.btn} to='/Slider'><Text onPress={BackHandler.exitApp}>Exit</Text></Link>
          </View>
        </NativeRouter>
      </Provider>
      
    )
  }
}
