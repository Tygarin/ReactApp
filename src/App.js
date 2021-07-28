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
import Player from './pages/player'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/Slider'>
              <Slider />
            </Route>
            <Route path='/Player'>
              <Player />
            </Route>
          </Switch>
          <View style={styles.nav}>
            <Link style={styles.btn} to='/'><Text>Home</Text></Link>
            <Link style={styles.btn} to='/Slider'><Text>Slider</Text></Link>
            <Link style={styles.btn} to='/Player'><Text>Player</Text></Link>
            <Link style={styles.btn} onPress={() => Linking.openURL('https://q-digital.org')}><Text>Browser</Text></Link>
            <Link style={styles.btn} onPress={BackHandler.exitApp}><Text>Exit</Text></Link>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}
