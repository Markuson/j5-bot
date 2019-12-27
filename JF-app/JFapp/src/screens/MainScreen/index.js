import React, { Component } from 'react'
import { SafeAreaView, Text, Vibration, View } from 'react-native'

import GlobalStyles from '../../styles/GlobalStyles'
import GlobalAspect from '../../styles/GlobalAspect'


export default class MainScreen extends Component {
    state = {
    }

    static navigationOptions = {
        title: 'Main'
    }

    render() {
        const {
            handleNavigationProfileScreen,
            handleNavigateQRScanner,
        } = this

        return <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={GlobalStyles.appContainer}>
                <Text>Hello world</Text>
            </View>
        </SafeAreaView>
    }
}