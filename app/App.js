import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Lobby from '@screens/Auth/Lobby';
import Registration from '@screens/Auth/Registration';
import Login from '@screens/Auth/Login';
import Home from '@screens/Home';

export default function App() {
  return (
    <Router sceneStyle={styles.scene}>
      <Stack key='root'>
        <Scene key='lobby' component={Lobby} />
        <Scene key='register' component={Registration} title='Sign up' />
        <Scene key='login' component={Login} title='Log in' />
        <Scene key='home' component={Home} title='Home' />
      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#ff5722',
  },
});
