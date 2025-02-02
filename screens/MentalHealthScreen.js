import React from 'react';
import {View, ImageBackground, TouchableOpacity, Text, Image} from 'react-native';
import styles from './MentalHealthStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Importujeme navigaci
import { Svg, Path, Text as SvgText, TextPath, Circle } from 'react-native-svg'; // Import Circle pro středový bod

export default function MentalHealthScreen() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/homeScreenBackground.webp')} style = {styles.background}>
            <View style={styles.container}>
                <View style={styles.upperGradientContainer}>
                    <View style={styles.fill}></View>
                    <LinearGradient
                        colors={['#2c2e65', '#c3d4e6']} // Přechod z #6f8299 do #c3d4e6
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1.5 }}
                        style={styles.fade}
                    />
                </View>
                <View style={styles.buttonsOnTopContainer}>
                    <TouchableOpacity style={styles.buttonsOnTopCalming}>
                        <ImageBackground source={require('../assets/calmingTechniques.webp')} style={styles.buttonOnTopBackground}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsOnTopGames}>
                        <ImageBackground source={require('../assets/miniGamesButton.webp')} style={styles.buttonOnTopBackground}/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.zenGardenContainer}>
                    <ImageBackground source={require('../assets/zenGarden.webp')} style = {styles.zenGarden}/>
                </View>
                <View style={styles.buttonsOnbottomContainer}>
                    <TouchableOpacity style={styles.buttonOnBottomMusic}>
                        <ImageBackground source={require('../assets/musicButton.webp')} style={styles.buttonOnBottomMusicBackground}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOnBottomJournal} onPress={() => navigation.navigate('Journal')}>
                        <ImageBackground source={require('../assets/journalButtons.webp')} style={styles.buttonOnBottomBackground}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.gradientContainer}>
                    <LinearGradient
                        colors={['#6f8299', '#c3d4e6']} // Přechod z #6f8299 do #c3d4e6
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 0.5, y: 0 }}
                        style={styles.fade}
                    />
                </View>
                <View style={styles.footerBar}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/homeButtonPressed.webp')} style={styles.iconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image source={require('../assets/faceButton.webp')} style={styles.iconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image source={require('../assets/statsButton.webp')} style={styles.iconImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image source={require('../assets/userButton.webp')} style={styles.iconImage} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}