import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Opravené cesty pro importy
import StartScreen from './src/screens/StartScreen.js';
import SignUpScreen from './src/screens/SignUpScreen.js';
import GuestScreen from './src/screens/GuestScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import MentalHealthScreen from './src/screens/MentalHealthScreen.js';
import WelcomeScreen from './src/screens/WelcomeScreen.js';
import JournalScreen from './src/screens/JournalScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mental" component={MentalHealthScreen} />
        {/* <Stack.Screen name="Journal" component={JournalScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
