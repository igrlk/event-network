import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, TextInput } from 'react-native';

import { login } from '@api/auth';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestLogin = async () => {
    setIsLoading(true);
    try {
      const result = await login({ email, password });
      console.log(result);
    } catch (ex) {
      console.error(ex);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          <Text>Password</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} />
          <Button style={styles.button} title='Log in' onPress={requestLogin}></Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 100,
  },
  input: {
    width: 300,
    padding: 5,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 10,
  },
});
