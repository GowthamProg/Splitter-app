import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './Styles';

const API_KEY = "AIzaSyBrPB9XtspNc5zAYGLSkm31s3vUqvQSy40";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let i=0;
  let handleLogin
  if(i){
      handleLogin = async () => {
      if(1){
        Alert.alert("Login Successful", "Welcome back!");
        navigation.replace("Main"); // Navigate to Home screen
      } else {

        Alert.alert("Login Failed", data.error.message);
      }
  }}
  else{
    handleLogin = async () => {
    try {
        console.log(username,password);
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: username,password:password, returnSecureToken: true }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (response.ok) 
      {
        Alert.alert("Login Successful", "Welcome back!");
        navigation.replace("Main"); // Navigate to Home screen
      } else {

        Alert.alert("Login Failed", data.error.message);
      }
    } catch (error) {
        console.log(error.message);
      Alert.alert("Error", error.message);
    }
  }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Login</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          keyboardType="email-address"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
