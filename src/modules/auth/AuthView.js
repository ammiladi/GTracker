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

export default function LoginView(props)  {

    const bgImage = {
        uri:
        "https://images.unsplash.com/photo-1569685915250-01b72923ca1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    };
   // const [username, setUsername] = useState(null);
   // const [password, setPassword] = useState(null);
    const [switchValue, setSwitchValue] = useState(false);
    const [spinnerVisibility, setSpinnerVisibility] = useState(false);
    return (
    <View>
    <StatusBar barStyle="light-content" />
    {/*
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
        onPressLogin={props.login}
        usernameOnChangeText={(username) => {props.username = username}}
        onPressSettings={() => alert("Settings Button is pressed")}
        passwordOnChangeText={(password) => {props.password = password}}
    />
    </View>
  );
  };
