import React from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './Styles'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! 🎉</Text>
    </View>
  );
};

export default HomeScreen;