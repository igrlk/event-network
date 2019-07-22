import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput } from 'react-native';

import { getEvents } from '@api/events';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadEvents();

    async function loadEvents() {
      setIsLoading(true);
      try {
        setEvents(await getEvents());
      } catch (ex) {
        console.log(ex);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.form}>
          <Text style={styles.label}>Home</Text>
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
