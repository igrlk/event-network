import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';

import { checkForToken } from '@utilities/token';
import { resetNavigation } from '@utilities/navigator';
import authBackground from '@images/backgrounds/auth.jpg';

export default function Lobby() {
  useEffect(() => {
    checkForToken().then(res => resetNavigation(res ? 'Home' : 'Login'));
  }, []);

  return (
    <ImageBackground source={authBackground} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 10,
  },
});
