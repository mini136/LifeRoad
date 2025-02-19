import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import styles from './LoginScreenStyles'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native'; 
import { login } from '../api/authApi.js'; 

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleForgotPasswordPress = () => {
    console.log('Forgot Password pressed');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      const response = await login(email, password);
      console.log('Login Success:', response);
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('Home'); // Přesměrování po úspěšném loginu
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      Alert.alert('Error', error.response?.data?.message || 'Invalid email or password.');
    }
  };

  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.containerLogin}>
        <View style={styles.loginTitle}>
          <ImageBackground source={require('../assets/login_title.webp')} style={styles.loginTitleBackground}/>
        </View>
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPass}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
            <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <ImageBackground source={require('../assets/continue_button.webp')} style={styles.buttonBackground} />
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.text}>Do not have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
          <ImageBackground source={require('../assets/return_button.webp')} style={styles.returnButtonBackground} />
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
}
