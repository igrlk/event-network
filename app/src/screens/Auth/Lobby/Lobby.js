import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import Button from '@components/Button';
import { checkForToken } from '@utilities/token';
import { resetNavigation } from '@utilities/navigator';

export default function Lobby({ navigation }) {
  const [isCheckingForToken, setIsCheckingForToken] = useState(true);
  useEffect(() => {
    checkToken();

    async function checkToken() {
      if (await checkForToken()) {
        resetNavigation('Home');
      } else {
        setIsCheckingForToken(false);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        {isCheckingForToken ? (
          <ActivityIndicator />
        ) : (
          <>
            <Button onPress={() => navigation.navigate('Login')} style={styles.button}>
              Log in
            </Button>
            <Button onPress={() => navigation.navigate('Registration')}>Sign up</Button>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#ff5722',
  },
  containerInner: {
    width: 300,
  },
  button: {
    marginBottom: 10,
  },
});
