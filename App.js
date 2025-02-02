import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import SignUpScreen from './screens/SignUpScreen';
import GuestScreen from './screens/GuestScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MentalHealthScreen from './screens/MentalHealthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import JournalScreen from './screens/JournalScreen';

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
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Mental" component={MentalHealthScreen}/>
       {/* <Stack.Screen name="Journal" component={JournalScreen}/>  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}