import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput } from 'react-native';

import { getEvents } from '@api/events';
import Button from '@components/Button';

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    loadEvents();

    async function loadEvents() {
      setIsLoading(true);
      try {
        setEvents(await getEvents());
        console.log(events);
      } catch (ex) {
        console.log(ex);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Button style={styles.button} onPress={() => navigation.navigate('EventCreating')}>
              Create event
            </Button>
            <Button style={styles.button} onPress={() => navigation.navigate('EventSearching')}>
              Find events
            </Button>
            {events.length === 0 && <Text style={styles.label}>You have no events...</Text>}
          </>
        )}
      </View>
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
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  youCanText: {
    color: '#fff',
    fontSize: 17,
    marginTop: 10,
  },
  youCanTextLink: {
    fontSize: 17,
    color: '#ececec',
  },
});
