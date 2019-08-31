import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './inputStyles';

export default function Input({ value, onChange, type }) {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        textContentType={getTextContentType(type)}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        autoCapitalize='none'
        secureTextEntry={type === 'password'}
      />
    </View>
  );
}

function getTextContentType(type) {
  switch (type) {
    case 'email':
      return 'emailAddress';
    default:
      return '';
  }
}
