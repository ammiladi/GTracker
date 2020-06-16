import React from 'react';

import Navigator from './navigation/Navigator';
import AppState from './AppState';
import LoginView from './login/LoginView';
import Login from 'react-native-login-keycloak';

export default  function AppView() {




    return <Navigator onNavigationStateChange={() => {

    }} uriPrefix="/app"/>;


}
