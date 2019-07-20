import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '@components/Button';

export default function Lobby(something) {
  console.log('something', something);
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Button onPress={() => Actions.login()} style={styles.button}>
          Log in
        </Button>
        <Button onPress={() => Actions.register()}>Sign up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 130,
  },
  containerInner: {
    width: 300,
  },
  button: {
    marginBottom: 10,
  },
});
