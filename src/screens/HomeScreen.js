import React, { useState, useEffect } from "react";
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
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import { Svg, Path, Text as SvgText, TextPath } from "react-native-svg";
import styles from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  saveUserMood,
  getAllSongs,
  getSongFileByTitle,
  getAllFunFacts,
} from "../api/authApi";
import TrackPlayer, {
  Capability,
  useTrackPlayerEvents,
  usePlaybackState,
  RepeatMode,
  toggleShuffle,
  skipToPrevious,
  skipToNext,
  togglePlayPause,
  playbackState,
  toggleRepeat,
} from "react-native-track-player";

export default function HomeScreen() {
  const progressValue = 0.5;
  const rotateAnimation = new Animated.Value(0);
  const welcomeMessage = "Hi, Victor ";
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBloomOpen, setIsBloomOpen] = useState(false);
  const [flowerSize, setFlowerSize] = useState({ width: 0, height: 0 });
  const [touchPositions, setTouchPositions] = useState([]);
  const [isFlowerVisible, setIsFlowerVisible] = useState(true);
  const [segmentClicked, setSegmentClicked] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [funFacts, setFunFacts] = useState([]); // Ukládá fun facts
  const [currentFunFact, setCurrentFunFact] = useState({
    header: "Loading...",
    funFact: "Please wait...",
  });
  const images = [
    require("../assets/mood_tracker/yellow.png"),
    require("../assets/mood_tracker/green.png"),
    require("../assets/mood_tracker/light_blue.png"),
    require("../assets/mood_tracker/blue.png"),
    require("../assets/mood_tracker/purple.png"),
    require("../assets/mood_tracker/pink.png"),
    require("../assets/mood_tracker/red.png"),
    require("../assets/mood_tracker/orange.png"),
  ];
  const moods = [
    "Disgusted",
    "Happy",
    "Sad",
    "Scared",
    "Excited",
    "Confident",
    "Angry",
    "Surprised",
  ];

  useEffect(() => {
    const setup = async () => {
      try {
        await TrackPlayer.setupPlayer();
        console.log("Player set up successfully!");
      } catch (error) {
        console.error("Error during player setup:", error);
      }
    };

    setup();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  // Uloží velikost květu, abychom mohli spočítat střed
  const handleFlowerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setFlowerSize({ width, height });
  };

  const getSegment = (x, y) => {
    // Získání úhlu v radiánech
    let angle = Math.atan2(y, x) * (180 / Math.PI); // Převedeme na stupně

    // Upravíme úhel do rozsahu 0°–360°
    if (angle < 0) {
      angle += 360;
    }

    // Rozdělení na segmenty (každý po 45°)
    if (angle >= 0 && angle < 45) return 2;
    if (angle >= 45 && angle < 90) return 3;
    if (angle >= 90 && angle < 135) return 4;
    if (angle >= 135 && angle < 180) return 5;
    if (angle >= 180 && angle < 225) return 6;
    if (angle >= 225 && angle < 270) return 7;
    if (angle >= 270 && angle < 315) return 0;
    if (angle >= 315 && angle < 360) return 1;

    return 0; // Pro jistotu, pokud by něco selhalo
  };

  const handleFlowerPress = (event) => {
    const { locationX, locationY } = event.nativeEvent;

    // Vypočítáme relativní souřadnice vůči středu
    const centerX = flowerSize.width / 2;
    const centerY = flowerSize.height / 2;
    const relativeX = locationX - centerX;
    const relativeY = locationY - centerY;

    const segment = getSegment(relativeX, relativeY);

    setSegmentClicked(segment);
    setIsFlowerVisible(false);
    setCurrentIndex(segment),
      console.log(`Kliknuto relativně na: x=${relativeX}, y=${relativeY}`);
  };

  const checkTimeAndShowPopup = async () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const todayDate = currentTime.toDateString();
    const lastShownDate = await AsyncStorage.getItem("lastShownDate");

    if (
      (currentHour >= 1 && currentHour <= 15) ||
      (currentHour >= 18 && currentHour <= 23)
    ) {
      setModalVisible(true);
      await AsyncStorage.setItem("lastShownDate", todayDate);
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
    outputRange: ["0deg", "80000deg"],
  });

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const setMood = () => {
    saveUserMood(moods[currentIndex]);
    setModalVisible(false);
  };

  const setupPlayer = async (songs) => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(
      songs.map((song) => ({
        id: song.id.toString(), // Unikátní ID
        url: song.url, // URL písničky
        title: song.title,
        artist: song.artist,
        artwork: song.artwork, // URL obrázku alba (volitelné)
      }))
    );
  };

  const SongPlayer = () => {
    const [songs, setSongs] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);

    const playbackState = usePlaybackState(); // Stav přehrávače (přehrává/pauza)

    useEffect(() => {
      const loadSongs = async () => {
        try {
          const fetchedSongTitles = await getAllSongs();

          // Načtení souborů písniček podle názvů
          const fetchedSongs = await Promise.all(
            fetchedSongTitles.map(async (title) => {
              const file = await getSongFileByTitle(title);
              return { id: title, title, url: file }; // url místo file
            })
          );

          setSongs(fetchedSongs);

          if (fetchedSongs.length > 0) {
            setIsReady(true);
            await setupPlayer(fetchedSongs); // Nastavení přehrávače s kompletními daty
          }
        } catch (error) {
          console.error("Chyba při načítání písniček:", error);
        }
      };

      loadSongs();
      return () => {
        TrackPlayer.reset(); // Vyčistíme při odchodu
      };
    }, []);

    // Funkce pro přehrávání všech písniček
    const playAllSongs = () => {
      TrackPlayer.play();
    };

    // Funkce pro pozastavení přehrávání
    const pause = () => {
      TrackPlayer.pause();
    };

    const togglePlayPause = () => {
      if (playbackState === TrackPlayer.STATE_PLAYING) {
        TrackPlayer.pause();
      } else {
        TrackPlayer.play();
      }
    };

    // Funkce pro přehrávání další písničky
    const skipToNext = () => {
      TrackPlayer.skipToNext(); // Přejde na další písničku
    };

    // Funkce pro přehrávání předchozí písničky
    const skipToPrevious = () => {
      TrackPlayer.skipToPrevious(); // Přejde na předchozí písničku
    };

    // Funkce pro zapnutí/zakázání shuffle (náhodného přehrávání)
    const toggleShuffle = async () => {
      setShuffle(!shuffle);
      await TrackPlayer.setShuffleMode(
        shuffle ? TrackPlayer.ShuffleMode.Off : TrackPlayer.ShuffleMode.Queue
      );
    };

    // Funkce pro zapnutí/zakázání repeat (opakování aktuální písničky)
    const toggleRepeat = async () => {
      const newRepeatState = !repeat;
      setRepeat(newRepeatState);
      await TrackPlayer.setRepeatMode(
        newRepeatState ? RepeatMode.Track : RepeatMode.Off
      );
    };
  };

  useEffect(() => {
    const fetchFunFacts = async () => {
      try {
        const data = await getAllFunFacts(); // Zavolání API
        setFunFacts(data);
        setCurrentFunFact(data[Math.floor(Math.random() * data.length)]); // Nastavení náhodného prvního faktu
      } catch (error) {
        console.error("Error fetching fun facts:", error);
      }
    };

    fetchFunFacts();
  }, []);

  // 🟢 Funkce pro získání nového náhodného FunFact
  const handleNewFunFact = () => {
    if (funFacts.length > 0) {
      const newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setCurrentFunFact(newFact);
    }
  };

  const AnimatedSwitcher = () => {
    const screenWidth = Dimensions.get("window").width;
    const animationValue = useState(new Animated.Value(0))[0];

    const animateViews = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: -screenWidth,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.delay(5000),
          Animated.timing(animationValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.delay(5000),
        ])
      ).start(() => {
        handleNewFunFact(); // 🟢 Po dokončení animace změní fakt
        animateViews();
      });
    };

    useEffect(() => {
      animateViews();
    }, []);
    return (
      <>
        {/* View pro rotatingImageContainer */}
        <Animated.View
          style={[
            styles.rotatingImageContainer,
            { transform: [{ translateX: animationValue }] },
          ]}
        >
          <Animated.Image
            source={require("../assets/disk.svg")}
            style={styles.rotatingImage}
          />
          <Animated.View style={styles.circularTextContainer}>
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
            source={require("../assets/playerHandIcon.webp")}
            style={styles.overlayImage}
          />
        </Animated.View>

        {/* View pro funFactContainer */}
        <Animated.View
          style={[
            styles.funFactContainer,
            {
              transform: [{ translateX: animationValue }],
            },
          ]}
        >
          <Text style={styles.funFactText}>Fun Fact</Text>
          <ImageBackground
            source={require("../assets/funFactBackground.webp")}
            style={styles.funFactBackground}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.funFactHeader}>{currentFunFact.header}</Text>
            <Text style={styles.funFactMain}>{currentFunFact.funFact}</Text>
          </ImageBackground>
        </Animated.View>
      </>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/homeScreenBackground.webp")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.smallWhiteText}>
            Life Road - The Road to Ease
          </Text>
          <Text style={styles.welcomeText}>
            {welcomeMessage}
            <Text style={styles.boldText}>welcome back!</Text>
          </Text>
        </View>

        <AnimatedSwitcher />

        <View style={styles.gradientContainer}>
          <LinearGradient
            colors={["#6f8299", "#c3d4e6"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={styles.fade}
          />
        </View>

        <View style={styles.playerContainer}>
          <SongPlayer />
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
            <View
              style={[
                styles.progressCircle,
                { left: `${progressValue * 100}%` },
              ]}
            />
          </View>

          <View style={styles.controlButtons}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={toggleShuffle}
            >
              <Image
                source={require("../assets/shuffleIcon.webp")}
                style={styles.controlIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={skipToPrevious}
            >
              <Image
                source={require("../assets/prevIcon.webp")}
                style={styles.controlIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.controlButton, styles.playButton]}
              onPress={togglePlayPause}
            >
              <Image
                source={
                  playbackState === TrackPlayer.STATE_PLAYING
                    ? require("../assets/playIcon.webp") // Ikona pauzy
                    : require("../assets/playIcon.webp") // Ikona přehrávání
                }
                style={styles.playIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={skipToNext}>
              <Image
                source={require("../assets/nextIcon.webp")}
                style={styles.controlIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={toggleRepeat}
            >
              <Image
                source={require("../assets/repeatIcon.webp")}
                style={styles.controlIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mentalContainer}>
          <TouchableOpacity
            style={styles.mentalButton}
            onPress={() => navigation.navigate("Mental")}
          >
            <Image
              source={require("../assets/mentalButton.webp")}
              style={styles.iconMental}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mentalButton}>
            <Image
              source={require("../assets/physicalButton.webp")}
              style={styles.iconMental}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footerBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/homeButtonPressed.webp")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/faceButton.webp")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/statsButton.webp")}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../assets/userButton.webp")}
              style={styles.iconImage}
            />
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
            colors={["#261b3d", "#343f5c"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={StyleSheet.absoluteFillObject}
          />

          <Text style={styles.moodText}>
            {isBloomOpen ? "How are you feeling today?" : "Tap to open"}
          </Text>

          {isFlowerVisible ? (
            <View style={styles.flower}>
              <TouchableOpacity
                style={styles.bloomTouch}
                onPress={handleImagePress}
              >
                <Image
                  key={isBloomOpen ? "bloomOpen" : "bloomClosed"}
                  source={
                    isBloomOpen
                      ? require("../assets/mood_tracker/flowerBloom.png")
                      : require("../assets/mood_tracker/flowerClosedBloom.png")
                  }
                  style={isBloomOpen ? styles.openBloom : styles.closedBloom}
                  onLayout={handleFlowerLayout} // Získáme rozměry květu
                  onStartShouldSetResponder={() => true}
                  onResponderRelease={isBloomOpen ? handleFlowerPress : null} // Sledujeme kliknutí
                />
              </TouchableOpacity>

              {/* Stonek květiny */}
              <Image
                source={require("../assets/mood_tracker/stem.png")}
                style={styles.stem}
              />
            </View>
          ) : (
            <View style={styles.carouselContainer}>
              {/* Text nad obrázkem */}
              <Text style={styles.imageTitle}>{moods[currentIndex]}</Text>

              {/* Šipka doleva */}
              {currentIndex > 0 && (
                <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
                  <Text style={styles.arrowText}>←</Text>
                </TouchableOpacity>
              )}

              {/* Obrázek */}
              <Image source={images[currentIndex]} style={styles.image} />

              {/* Šipka doprava */}
              {currentIndex < images.length - 1 && (
                <TouchableOpacity
                  style={styles.arrowRight}
                  onPress={handleNext}
                >
                  <Text style={styles.arrowText}>→</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity style={styles.okayButton} onPress={setMood}>
                <Text style={styles.textOkayButton}>Okay</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </ImageBackground>
  );
}
