import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, CheckBox } from 'react-native';
import styles from './SignUpScreenStyles'; // Aktualizovaný import
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importujeme ikonku z knihovny
import { useNavigation } from '@react-navigation/native'; // Importujeme navigaci

export default function SignUpScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false); // Stav pro zobrazení hesla
  const navigation = useNavigation(); // Inicializujeme navigaci

  const handleTermsPress = () => {
    // Zde můžete navigovat nebo otevřít odkaz pro Terms of Service
    console.log('Terms of Service pressed');
  };

  const handlePrivacyPress = () => {
    // Zde můžete navigovat nebo otevřít odkaz pro Privacy Policy
    console.log('Privacy Policy pressed');
  };

  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.containerSignUp}>

      <View style={styles.signUpTitle}>
          <ImageBackground source={require('../assets/register_title.webp')} style={styles.signUpTitleBackground}/>
        </View>
        
        <View style={styles.containerSignButt}>
          <View style={styles.buttonRow}>
            <View style={styles.signUpButtonContainer1}>
              <TouchableOpacity style={styles.signUpButton}>
                <ImageBackground source={require('../assets/googleButton.webp')} style={styles.buttonWithBackground} />
              </TouchableOpacity>
            </View>
            <View style={styles.signUpButtonContainer2}>
              <TouchableOpacity style={styles.signUpButton}>
                <ImageBackground source={require('../assets/twitterButton.webp')} style={styles.buttonWithBackground} />
              </TouchableOpacity>
            </View>
            <View style={styles.signUpButtonContainer3}>
              <TouchableOpacity style={styles.signUpButton}>
                <ImageBackground source={require('../assets/facebookButton.webp')} style={styles.buttonWithBackground} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Name" />
        
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
        
        <View style={styles.checkboxContainer}>
          <CheckBox />
          <Text style={styles.checkboxText}>
            I agree to the{' '}
            <Text style={styles.linkText} onPress={handleTermsPress}>Terms of Service</Text>
            {' '}and{' '}
            <Text style={styles.linkText} onPress={handlePrivacyPress}>Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.continueButton}>
          <ImageBackground source={require('../assets/continue_button.webp')} style={styles.buttonBackground} />
        </TouchableOpacity>

        {/* Přidání textu pro přihlášení */}
        <View style={styles.loginContainer}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <ImageBackground source={require('../assets/return_button.webp')} style={styles.returnButtonBackground} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
