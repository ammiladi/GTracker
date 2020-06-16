import React, { useState } from "react";
import {   View, StatusBar } from 'react-native';
import LoginScreen from "react-native-login-screen";
import Security from "../security/index.js";
import AppView from '../AppView';
import {fonts} from "../../styles";
import {TokenStorage} from "react-native-login-keycloak/src/TokenStorage";
import login from "react-native-login-keycloak";
//import LoginView from "../AppViewContainer";
//import LoginScreen from "./lib/src/LoginScreen";

export default function LoginView({  setUsername, setPassword, login })  {
    //const loginService =  new Security();
    const config = {
        url: 'http://localhost:8080/auth',
        realm: 'demo',
        clientId: 'gtracker',
        clientSecret:'b8f18315-00f8-469b-8fd0-1c703b8285c6',
        redirectUri: 'https://<REDIRECT HOST>/success.html',
        appsiteUri: 'https://<APPSITE HOST>/app.html',
        kcIdpHint: 'facebook', // *optional*
    };

    const bgImage = {
        uri:
        "https://images.unsplash.com/photo-1569685915250-01b72923ca1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    };

    const [switchValue, setSwitchValue] = useState(false);
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);

    return (
    <View>
    <StatusBar barStyle="light-content" />
    {/*
    * One Line of code and get the whole login screen :)
    * <LoginScreen />
    */}



    <LoginScreen
        logoText="GTracker"
        spinnerEnable
        spinnerVisibility={spinnerVisibility}
        titleStyle={{
          fontSize: 12,
          color: "#adadad",
        }}
        logoTextStyle={{
          fontSize: 27,
          color: "#fdfdfd",
        }}
        loginButtonTextStyle={{
          color: "#fdfdfd",
        }}
        textStyle={{
          color: "#757575",
        }}
        signupStyle={{
          color: "#fdfdfd",
        }}
        onPressLogin={() => { login
          //setSpinnerVisibility(true);
          //  Security.startLoginProcess(config, username, password).then(token => {
            //console.log("Token :"+Security.getTokens());
            //if(Security.getTokens()!=undefined) return (<AppView/>);
         // });

        }}
        usernameOnChangeText={(username) => {setUsername(username)}}
        onPressSettings={() => alert("Settings Button is pressed")}
        passwordOnChangeText={(password) => {setPassword(password)}}
    />
    </View>
  );
  };
