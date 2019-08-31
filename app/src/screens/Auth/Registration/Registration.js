import React, { useState } from 'react';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';

import { register } from '@api/auth';
import { setToken } from '@utilities/token';
import { resetNavigation } from '@utilities/navigator';
import Button from '@components/Button';
import Input from '@components/Input';
import authBackground from '@images/backgrounds/auth.jpg';

import styles from './registrationStyle';

export default function Registration({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('Igor');
  const [email, setEmail] = useState('iluchenkov@gmail.com');
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
    <ImageBackground source={authBackground} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Event Network</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.formContainer}>
            <View style={styles.form}>
              <View style={styles.formLabels}>
                <Text style={styles.label}>
                  <Text>NAME:</Text>
                </Text>
                <Text style={styles.label}>
                  <Text>E-MAIL:</Text>
                </Text>
                <Text style={styles.label}>
                  <Text>PASSWORD:</Text>
                </Text>
              </View>
              <View style={styles.formInputs}>
                <Input value={name} onChange={setName} />
                <Input value={email} onChange={setEmail} type='email' />
                <Input value={password} onChange={setPassword} type='password' />
              </View>
            </View>
            <Button onPress={requestRegistration}>SIGN UP</Button>
            <View style={styles.buttonSeparatorContainer}>
              <View style={styles.buttonSeparator}></View>
            </View>
            <Button onPress={() => navigation.navigate('Login')}>LOG IN</Button>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
