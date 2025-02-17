import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './StartScreenStyles';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <View style={styles.triangle} /> {/* Trojúhelník za textem */}
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.triangle} /> {/* Trojúhelník za textem */}
          <Text style={styles.buttonText}>sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guest')}>
          <View style={styles.triangle} /> {/* Trojúhelník za textem */}
          <Text style={styles.buttonText}>guest</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/logo.webp')} style={styles.logo} />
    </ImageBackground>
  );
}
