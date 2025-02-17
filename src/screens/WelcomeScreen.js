import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './WelcomeScreenStyles';
import { useNavigation } from '@react-navigation/native'; 

export default function WelcomeScreen(){

    const navigation = useNavigation(); // Inicializujeme navigaci

    return (
        <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <ImageBackground source={require('../assets/welcomeTextWhite.webp')} style={styles.titleBackground}/>
                </View>
                <Image source={require('../assets/logoTransparent.webp')} style={styles.logo} />
                <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Start')}>
                    <ImageBackground source={require('../assets/getStarted.webp')} style={styles.getStartedButtonBackground}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}   