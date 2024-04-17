import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App</Text>
      <Text style={styles.name}>Vishvadharshini A</Text>
      <View style={styles.buttonContainer}>
        <Button title="learn more" onPress={() => alert('Button Pressed!')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;