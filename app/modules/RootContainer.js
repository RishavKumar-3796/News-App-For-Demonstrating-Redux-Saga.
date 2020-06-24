import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import ReduxNavigation from '../navigation/ReduxNavigation';
import { ApplicationStyles } from '../theme';
import SplashScreen from 'react-native-splash-screen'

class RootContainer extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <View style={ApplicationStyles.screen.mainContainer}>
                <StatusBar barStyle="dark-content" />
                <ReduxNavigation />
            </View>
        );
    }
}

export default RootContainer;
