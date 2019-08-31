import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './buttonStyles';

Button.defaultProps = {
  onPress: () => {},
  style: {},
};

export default function Button({ children, onPress, style }) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress || (() => {})}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
