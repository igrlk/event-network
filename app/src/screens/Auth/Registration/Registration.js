import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, TextInput } from 'react-native';

import { register } from '@api/auth';

export default function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestRegistration = async () => {
    setIsLoading(true);
    try {
      const result = await register({ name, email, password });
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
          <Text>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          <Text>Password</Text>
          <TextInput style={styles.input} value={password} onChangeText={setPassword} />
          <Button style={styles.button} title='Sign up!' onPress={requestRegistration}></Button>
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
