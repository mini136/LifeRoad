import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './GuestScreenStyles'; // Import stylů
import { useNavigation } from '@react-navigation/native'; // Importujeme navigaci

export default function GuestScreen() {
  const [name, setName] = useState('');
  const navigation = useNavigation(); // Inicializujeme navigaci

  const handleContinue = () => {
    console.log('Continue pressed with name:', name);
    // Zde můžete přidat logiku pro pokračování, například navigaci nebo validaci
  };

  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.container}>

        <View style={styles.guestTitle}>
          <ImageBackground source={require('../assets/guest_tite.webp')} style={styles.guestTitleBackground}/>
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <ImageBackground source={require('../assets/continue_button.webp')} style={styles.buttonBackground} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <ImageBackground source={require('../assets/return_button.webp')} style={styles.returnButtonBackground} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
