import { StyleSheet } from "react-native";

export default StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#c3d4e6',
        width: '100%',  // Zajistí, že pozadí bude na celou šířku
        height: '100%', // Zajistí, že pozadí bude na celou výšku
        resizeMode: 'cover', // Zajistí, že se pozadí přizpůsobí velikosti obrazovky
    },

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    upperGradientContainer: {
        width: '100%',
        height: 120, // Zvýšeno pro prostor na pruh i gradient
        position: 'absolute',
        top: '12%',
    },
    
    fill: {
        backgroundColor: '#2c2e65', // Barva pruhu
        //backgroundColor: 'yellow',
        height: '20%', // Výška pruhu
        width: '100%',
        marginBottom: -5,
    },
    
    buttonsOnTopContainer: {
        position: 'absolute',
        width: '100%',
        height: '40%',
        top: '0%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    buttonsOnTopCalming: {
        width: '80%',
        height: '20%', 
        marginBottom: 40, // Mezera mezi tlačítky
        borderRadius:10,
    },

    buttonsOnTopGames: {
        width: '84%',
        height: '20%', 
        marginBottom: 40, // Mezera mezi tlačítky
        marginRight: 10,
    },
    
    buttonOnTopBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    

    zenGardenContainer: {
        position: 'absolute',
        top: '30%',
        alignSelf: 'center',
        height: '34%', // Výšku necháme určovat obrázek
        aspectRatio: 1.1, // Poměr stran kontejneru (přizpůsobte podle obrázku)
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    zenGarden: {
        width: '100%', // Obrázek vyplní celou šířku kontejneru
        height: '100%', // Obrázek vyplní celou výšku kontejneru
        resizeMode: 'contain', // Obrázek zachová poměr stran
    },

    buttonsOnbottomContainer: {
        position: 'absolute',
        width: '100%',
        height: '25%',
        bottom: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonOnBottomMusic: {
        height: '80%',
        aspectRatio: 0.7,
        marginHorizontal: 25,
        position: 'relative', // Přidáno pro relativní pozicování
        overflow: 'hidden',
        borderRadius: 5,
    },
    buttonOnBottomMusicBackground: {
        width: '100%',
        height: '100%',
    },
    halfDiskImage: {
        position: 'absolute',
        right: '-60%', // Posune obrázek za pravý okraj dle aspektu TouchableOpacity
        top: 0,
        aspectRatio: 1, // Relativní velikost k TouchableOpacity
        height: '97%', // Udržuje čtvercový poměr
    },
    circularTextSvg: {
        position: 'absolute',
        top: '50%',
        left: '125%',
        transform: [
            { translateX: -125 }, // Poloměr kruhu na šířku
            { translateY: -125 }, // Poloměr kruhu na výšku
            { rotate: '-90deg' }, // Otočení textu vlevo o 90°
        ],
    },
    buttonOnBottomJournal: { 
        height: '80%', 
        aspectRatio: 0.77,
        marginHorizontal: 25,
    },
    
    buttonOnBottomBackground: {
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
        flex: '1',
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

});