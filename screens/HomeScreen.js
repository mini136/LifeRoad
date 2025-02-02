import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  Animated,
  Easing,
  Alert,
  Modal,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import { Svg, Path, Text as SvgText, TextPath } from 'react-native-svg';
import styles from './HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const progressValue = 0.5;
  const rotateAnimation = new Animated.Value(0);
  const welcomeMessage = "Hi, Victor ";
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBloomOpen, setIsBloomOpen] = useState(false);
  let moodText = "Tap to open";

  const checkTimeAndShowPopup = async () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const todayDate = currentTime.toDateString();
    const lastShownDate = await AsyncStorage.getItem('lastShownDate');

    if (
      (currentHour >= 6 && currentHour <= 10) ||
      (currentHour >= 18 && currentHour <= 18)
    ) {
      setModalVisible(true);
      await AsyncStorage.setItem('lastShownDate', todayDate);
    }
  };

  useEffect(() => {
    checkTimeAndShowPopup();
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleImagePress = () => {
    setIsBloomOpen((prevState) => !prevState);
  };

  const handleTouchOnBloom = (event) => {
    if (isBloomOpen) {
      const { locationX, locationY } = event.nativeEvent;
      Alert.alert(`Touch Coordinates`, `X: ${locationX}, Y: ${locationY}`);
      console.log(`Touch detected at X=${locationX}, Y=${locationY}`);
    }
  };

  Animated.loop(
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 5000000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const rotateInterpolation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '80000deg'],
  });

  return (
    <ImageBackground source={require('../assets/homeScreenBackground.webp')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.smallWhiteText}>Life Road - The Road to Ease</Text>
          <Text style={styles.welcomeText}>
            {welcomeMessage}
            <Text style={styles.boldText}>welcome back!</Text>
          </Text>
        </View>

        <View style={styles.rotatingImageContainer}>
          <Animated.Image
            source={require('../assets/disk.svg')}
            style={[styles.rotatingImage, { transform: [{ rotate: rotateInterpolation }] }]}
          />

          <Animated.View style={[styles.circularTextContainer, { transform: [{ rotate: rotateInterpolation }] }]}>
            <Svg height="250" width="250">
              <Path
                id="circlePath"
                d="M 125, 125 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                fill="none"
              />
              <SvgText fill="white" fontSize="20">
                <TextPath href="#circlePath">
                  Insert music title - author
                </TextPath>
              </SvgText>
            </Svg>
          </Animated.View>

          <Image
            source={require('../assets/playerHandIcon.webp')}
            style={styles.overlayImage}
          />
        </View>

        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={['#6f8299', '#c3d4e6']}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.fade}
          />
        </View>

        <View style={styles.playerContainer}>
          <View style={styles.progressBarWrapper}>
            <Progress.Bar
              progress={progressValue}
              width={300}
              height={6}
              color="#19365c"
              unfilledColor="#597ba7"
              borderWidth={0}
              borderRadius={5}
              style={styles.filledBar}
            />
            <View style={[styles.progressCircle, { left: `${progressValue * 100}%` }]} />
          </View>

          <View style={styles.controlButtons}>
            <TouchableOpacity style={styles.controlButton}>
              <Image source={require('../assets/shuffleIcon.webp')} style={styles.controlIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Image source={require('../assets/prevIcon.webp')} style={styles.controlIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.controlButton, styles.playButton]}>
              <Image source={require('../assets/playIcon.webp')} style={styles.playIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Image source={require('../assets/nextIcon.webp')} style={styles.controlIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Image source={require('../assets/repeatIcon.webp')} style={styles.controlIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mentalContainer}>
          <TouchableOpacity style={styles.mentalButton} onPress={() => navigation.navigate('Mental')}>
            <Image source={require('../assets/mentalButton.webp')} style={styles.iconMental} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mentalButton}>
            <Image source={require('../assets/physicalButton.webp')} style={styles.iconMental} />
          </TouchableOpacity>
        </View>

        <View style={styles.footerBar}>
          <TouchableOpacity style={styles.iconButton}>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalBackground}>
          <LinearGradient
            colors={['#261b3d', '#343f5c']}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={StyleSheet.absoluteFillObject}
          />

          <Text style={styles.moodText}>{moodText}</Text>

          <View style={styles.flower}>
            {/* Zavřený stav květiny */}
            {!isBloomOpen && (
              <TouchableOpacity
                style={styles.bloomTouch}
                onPress={handleImagePress} // Funkce, která změní stav na otevřený
                onPressIn={handleTouchOnBloom}
              >
                <Image
                  source={require('../assets/mood_tracker/flowerClosedBloom.png')}
                  style={styles.closedBloom}
                />
              </TouchableOpacity>
            )}


            {isBloomOpen && (
              <TouchableOpacity
                style={styles.bloomTouch}
                onPress={handleImagePress} // Funkce, která může vrátit stav zpět
              >
                <Image
                  source={require('../assets/mood_tracker/flowerBloom.png')}
                  style={styles.openBloom}
                />
              </TouchableOpacity>
            )}

            {/* Stonek květiny */}
            <Image
              source={require('../assets/mood_tracker/stem.png')}
              style={styles.stem}
            />
          </View>
        </View>
      </Modal>

    </ImageBackground>
  );
}
