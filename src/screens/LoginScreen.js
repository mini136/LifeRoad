import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './LoginScreenStyles'; // Aktualizovaný import
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importujeme ikonku z knihovny
import { useNavigation } from '@react-navigation/native'; // Importujeme navigaci

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false); // Stav pro zobrazení hesla
  const navigation = useNavigation(); // Inicializujeme navigaci

  const handleForgotPasswordPress = () => {
    console.log('Forgot Password pressed');
  };

  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.containerLogin}>
        <View style={styles.loginTitle}>
          <ImageBackground source={require('../assets/login_title.webp')} style={styles.loginTitleBackground}/>
        </View>
        
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPass}
            placeholder="Password"
            secureTextEntry={!passwordVisible} // Nastavení podle stavu
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
            <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
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
