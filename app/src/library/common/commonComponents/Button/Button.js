import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
