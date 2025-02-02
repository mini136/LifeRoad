import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
        flex: 1,
        width: '100%',       // Zajištění šířky pozadí
        height: '100%',      // Zajištění výšky pozadí
        resizeMode: 'cover', // Přizpůsobení obrázku
        overflow: 'hidden',  // Skrytí přesahujících částí
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        position: 'absolute',
        width: '100%',
        aspectRatio: 3,
        top: '10%',
      },
      titleBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      logo: {
        position: 'absolute', // Převzato z logoContainer
        top: '40%',           // Převzato z logoContainer
        alignSelf: 'center',  // Převzato z logoContainer
        height: '20%',        // Převzato z logoContainer
        aspectRatio: 1,       // Převzato z logoContainer
        resizeMode: 'contain', // Doporučení pro správné zobrazení loga
      },    
      getStartedButton: {
        position: 'absolute',
        height: '7%',
        width: '90%',
        bottom: '10%',
        alignItems: 'center',
      },
      getStartedButtonBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      
});