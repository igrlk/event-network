import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput } from 'react-native';

import { register } from '@api/auth';
import { setToken } from '@utilities/token';
import { resetNavigation } from '@utilities/navigator';
import Button from '@components/Button';

export default function Registration({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('qwe');
  const [email, setEmail] = useState('Wefwef@mail.ru');
  const [password, setPassword] = useState('123123');

  const requestRegistration = async () => {
    setIsLoading(true);
    try {
      const { token } = await register({ name, email, password });

      setToken(token);
      resetNavigation('Home');
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
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            textContentType='emailAddress'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
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
    paddingTop: 40,
    backgroundColor: '#ff5722',
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
