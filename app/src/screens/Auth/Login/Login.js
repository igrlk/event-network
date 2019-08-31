import React, { useState } from 'react';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';

import { login } from '@api/auth';
import { setToken } from '@utilities/token';
import { resetNavigation } from '@utilities/navigator';
import Button from '@components/Button';
import Input from '@components/Input';
import authBackground from '@images/backgrounds/auth.jpg';

import styles from './loginStyles';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('iluchenkov@gmail.com');
  const [password, setPassword] = useState('123123');

  const requestLogin = async () => {
    setIsLoading(true);
    try {
      const { token } = await login({ email, password });

      setToken(token);
      resetNavigation('Home');
    } catch (ex) {
      console.error(ex);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground source={authBackground} style={styles.containerBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Event Network</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.formContainer}>
            <View style={styles.form}>
              <View style={styles.formLabels}>
                <Text style={styles.label}>
                  <Text>E-MAIL:</Text>
                </Text>
                <Text style={styles.label}>
                  <Text>PASSWORD:</Text>
                </Text>
              </View>
              <View style={styles.formInputs}>
                <Input value={email} onChange={setEmail} type='email' />
                <Input value={password} onChange={setPassword} type='password' />
              </View>
            </View>
            <Button onPress={requestLogin}>LOG IN</Button>
            <View style={styles.buttonSeparatorContainer}>
              <View style={styles.buttonSeparator}></View>
            </View>
            <Button onPress={() => navigation.navigate('Registration')}>SIGN UP</Button>
            <Text style={styles.forgot}>Forgot password?</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
