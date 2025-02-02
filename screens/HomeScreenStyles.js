import { Center } from "@react-three/drei";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        backgroundColor: '#c3d4e6',
        width: '100%',  // Zajistí, že pozadí bude na celou šířku
        height: '100%', // Zajistí, že pozadí bude na celou výšku
        resizeMode: 'cover', // Zajistí, že se pozadí přizpůsobí velikosti obrazovky
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    smallWhiteText: {
        color: '#c3d4e6',
        fontSize: 12,
        textAlign: 'center',
        marginTop: -30, // Záporný margin, který posune text nahoru
    },
    welcomeTextContainer: {
        position: 'absolute', // Umístí text pevně vzhledem k obrazovce
        top: '11%', // Posune text 20px od vrcholu obrazovky
        width: '100%', // Zajistí, že text bude mít dostatečný prostor
        alignSelf: 'center', // Zarovná text horizontálně na střed
        backgroundColor: '#c3d4e6',
        borderRadius: 15,
        padding: 10, // Přidá trochu vnitřního odsazení
    },
    welcomeText: {
        marginTop: 10,
        textAlign: 'center', // Zarovná text na střed uvnitř kontejneru
        color: '#19365c',
        fontSize: 24,
    },
    boldText: {
        fontWeight: 'bold', // Styl pro tučný text
      },
    rotatingImageContainer: {
        position: 'absolute',
        top: '17%', // Můžeš upravit podle potřeby
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '40%', // Poměrně velký prostor, aby se rotující obrázek vešel
        overflow: 'visible', // Zajistí, že obrázek nebude oříznutý
    },
    rotatingImage: {
        width: '90%', // Zmenšuje obrázek, aby se vešel na obrazovku
        height: '90%', // Poměrná výška, aby zůstal zachován poměr stran
        borderRadius: 150, // Pokud jde o kruh, zaoblení hrany
        resizeMode: 'contain', // Umožní obrázku, aby se přizpůsobil bez oříznutí
    },
    circularTextContainer: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
    },    
    overlayImage: {
        position: 'absolute',
        width: '70%', // Velikost obrázku, který bude přes rotující obrázek
        height: '70%',
        top: '5%', // Přesné umístění obrázku přes rotující obrázek
        left: '50%',
        resizeMode: 'contain',
    },
    playerContainer: {
        width: '90%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '-10%',
    },
    progressBarWrapper: {
        width: 300,
        height: 8,
        position: 'relative',
        justifyContent: 'center',
    },
    filledBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    progressCircle: {
        width: 12,
        height: 12,
        backgroundColor: '#19365c',
        borderRadius: 6,
        position: 'absolute',
        top: -3,
        zIndex: 2,
        transform: [{ translateX: -6 }],
    },
    controlButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlButton: {
        padding: 12.5,
    },
    controlIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
    playButton: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    mentalContainer: {
        width: '90%',
        height: '25%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: '-10%',
    },
    mentalButton: {
        width: '40%',
        height: '60%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: '4%',
        marginBottom: '-10%',
    },
    iconMental: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    gradientContainer: {
        width: '100%',
        height: 20,
        position: 'absolute',
        bottom: '10%',
    },
    fade: {
        width: '100%',
        height: '100%',
    },
    footerBar: {
        width: '100%',
        height: '10%',
        backgroundColor: '#c3d4e6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '8%',
        marginTop: '4%',
    },
    iconImage: {
        width: 37.5,
        height: 37.5,
        resizeMode: 'contain',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
      },
      moodText: {
        height: "10%",
        width: 'auto',
        fontSize: 30,
        position: 'absolute',
        top: '5%',
        alignItems: 'center',
        color: '#fff',
      },
      flower: {
        alignItems: 'center', // Zarovnání všech potomků na střed horizontálně
        justifyContent: 'flex-end', // Květina nahoře, stonek dole
        height: '75%', // Výška oblasti květiny
        width: '100%',
        position: 'relative', // Potřeba pro přesné umístění
        alignSelf: 'center', // Zarovnání celého flower horizontálně na střed
      },
      closedBloomTouch: {
        position: 'absolute', // Přesné zarovnání nad stonek
        top: '-15%',
        marginTop: '-15%',
        zIndex: 2, // Květ by měl být nad stonkem
        width: '70%',
        aspectRatio: 1,
        overflow: 'visible',
        alignContent: 'center',
        backgroundColor: 'red',
      },
      openBloomTouch: {
        backgroundColor: 'yellow',
        position: 'absolute', // Přesné zarovnání nad stonek
        top: '-15%',
        marginTop: '-15%',
        zIndex: 3, // Květ by měl být nad stonkem
        width: '70%',
        aspectRatio: 1,
        overflow: 'visible',
        alignContent: 'center',
      },
      bloomTouch: {
        position: 'absolute',
        top: '-15%',
        zIndex: 2, // Květ by měl být nad stonkem
        width: '70%',
        aspectRatio: 1,
        alignContent: 'center',
        backgroundColor: 'yellow',
      },
      closedBloom: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
      },
      bloomImage: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
      },
      stem: {
        height: '80%',
        aspectRatio: 1,
        resizeMode: 'contain', // Zachová proporce
        position: 'absolute', // Umístění pod květ
        bottom: '-18%', // Stonek dole
        zIndex: 1, // Stonek by měl být pod květem
        //marginLeft: '4%',
      },

});
