import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
      navigation.replace('Home'); // Navigate to Home screen
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Login</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Regitser</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Registration Failed', 'Passwords do not match.');
      return;
    }
    Alert.alert('Success', 'Registration Successful!');
    navigation.replace('Login'); // Navigate back to Login screen
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
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
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

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! 🎉</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginBox: {
    width: '90%', // Limit width
    maxWidth: 400, // Prevents full-screen stretching
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
