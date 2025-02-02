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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '30%',
  },
  returnButton: {
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'center',
    height: '7%',
    aspectRatio: 3,
    overflow: 'visible',
    zIndex: 2,
    //backgroundColor: 'yellow',
  },
  returnButtonBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  guestTitle: {
    top: '-10%',
    height: '18%',
    width: '100%',
    overflow: 'visible',
  },
  guestTitleBackground: {
    height: '100%',
    height: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 1,
    color: '#d3e6ac',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    marginVertical: 10,
    width: '90%',
    height: 50,
    borderRadius: 10, 
    borderColor: '#ffffff',
    borderWidth: 2,
    marginBottom: '10%',
    color: "#ffffff",
  },
  continueButton: {
    width: 235,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: '60%',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  buttonBackground: {
    width: 235,
    height: 80,
  },
});
