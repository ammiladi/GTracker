import { compose, lifecycle } from 'recompose';
import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { Platform, UIManager } from 'react-native';
import AppView from './AppView';
import Security from './security/index';
import LoginView from "./login/LoginViewContainer";



export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            assetsLoaded: false,
            token : null,
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
            'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
        });

        const token =  await Security.getTokens();
        //console("Token:"+token)
        this.setState({ assetsLoaded: true, token:token   } );

    }

    render() {
        const {assetsLoaded, token} = this.state;
        //console.log("Token" + token);
        if( assetsLoaded ) {
            if(token!=undefined) return (<LoginView/>);
            return (  <AppView/>  );
        }
        else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
