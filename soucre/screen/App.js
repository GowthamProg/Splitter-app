import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

// Import screens
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import FreindScreen from './FreindScreen';
import Sidebar from './Sidebar';

// Create Stack & Drawer Navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom Header with Hamburger Button
const CustomHeader = ({ navigation, title }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#5a5b49' }}>
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <MaterialIcons name="menu" size={28} color="white" />
    </TouchableOpacity>
    <Text style={{ color: 'white', fontSize: 20, marginLeft: 15 }}>{title}</Text>
  </View>
);

// Drawer Navigation (Sidebar)
const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />} screenOptions={{ drawerStyle: { width: 220 } }}>
    <Drawer.Screen name="Home" component={HomeScreen} options={{ header: (props) => <CustomHeader {...props} title="Home" /> }} />
    <Drawer.Screen name="Friends" component={FreindScreen} options={{ header: (props) => <CustomHeader {...props} title="Friends" /> }} />
  </Drawer.Navigator>
);

// Main Stack Navigator (Handles Login/Register separately)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        {/* Once logged in, show Drawer Navigator */}
        <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




















// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './LoginScreen';
// import RegisterScreen from './RegisterScreen';
// import HomeScreen from './HomeScreen';
// import MemberScreen from './MemberScreen';
// import DashboardScreen from './DashboardScreen';
// import Sidebar from './Sidebar';
// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Members" component={MemberScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Sidebar" component={Sidebar} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
