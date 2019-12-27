import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'
import MainNavigator from './src/navigator/MainNavigator'

import styles from './src/styles/GlobalStyles';

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    const { container } = styles

    if (this.state.fontsLoaded) {
      return <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    }
    else {
      return <View style={container}>
        <ActivityIndicator size="large" color="#00FFB6" />
      </View>
    }
  }
}