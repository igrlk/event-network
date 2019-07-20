import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { register } from '@api/auth';
import Button from '@components/Button';

export default function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestRegistration = async () => {
    setIsLoading(true);
    try {
      const result = await register({ name, email, password });
      Actions.home();
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
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.label}>Email</Text>
          <TextInput
            textContentType='emailAddress'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Button style={styles.button} onPress={requestRegistration}>
            Log in
          </Button>
        </View>
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
  form: {
    width: 300,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 20,
    borderColor: '#ececec',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#fff',
  },
  button: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});
