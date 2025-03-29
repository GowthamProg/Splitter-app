  import React, { useState } from 'react';
  import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
  import styles from './Styles'

  const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const API ="Your firebase API key";
    const handleRegister = async() => {
      if(password!==confirmPassword) {
        console.log("Retype re-password");
        Alert.alert("Enter correct re-password");
        return 0;
      }
      try{
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name,email, password,mobile, returnSecureToken: true }),
          }
        );
        const data = await response.json();
        console.log(data);
      if (response.ok) {
        Alert.alert("Registration Successful", "You can now log in.");
        navigation.replace("Login"); // Navigate to Login screen
      } else {
        Alert.alert("Registration Failed", data.error.message);
      }
      }catch (error) {
        Alert.alert("Error", error.message);
      };
      

      // if (password !== confirmPassword) {
      //   Alert.alert('Registration Failed', 'Passwords do not match.');
      //   return;
      // }
      // Alert.alert('Success', 'Registration Successful!');
      // navigation.replace('Login'); // Navigate back to Login screen
    };

    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Register</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>
            </View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={setemail}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  export default RegisterScreen;