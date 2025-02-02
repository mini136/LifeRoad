import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',       // Zajištění šířky pozadí
    height: '100%',      // Zajištění výšky pozadí
    resizeMode: 'cover', // Přizpůsobení obrázku
    overflow: 'hidden',  // Skrytí přesahujících částí
  },
  containerSignUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  returnButton: {
    position: 'absolute', // Absolutní pozicování
    bottom: '4%', // Tlačítko je pevně 2 % nad spodním okrajem
    alignSelf: 'center', // Zarovnání na střed horizontálně
    height: '7%', // Výška tlačítka
    aspectRatio: 3, // Poměr šířky k výšce
    overflow: 'visible',
    zIndex: 2,
  },
  returnButtonBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  signUpTitle: {
    position: 'absolute', // Absolutní pozicování
    top: '2%', // Umístění 2 % od vrchu
    width: '80%', // Roztažení přes celou šířku
    height: '10%', // Výška nadpisu
    overflow: 'visible',
    zIndex: 2,
  },
  signUpTitleBackground: {
    width: '100%', // Šířka pozadí
    height: '100%', // Výška pozadí
    resizeMode: 'contain', // Přizpůsobení obsahu
  },
  containerSignButt: {
    alignItems: 'center',
    marginTop: '35%',
    marginBottom: '5%',
  },
  buttonRow: {
    flexDirection: 'row',
    width: 220,
    height: 64,
    paddingHorizontal: 10,
  },
  signUpButton: {
    width: 70,
    height: 64,
  },
  signUpButtonContainer1: {
    marginLeft: -30,
  },
  signUpButtonContainer2: {
    marginLeft: 22,
    marginRight: 15,
  },
  signUpButtonContainer3: {
    marginLeft: 10,
  },
  buttonWithBackground: {
    height: 65,
    width: 65,
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
  inputPass: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    width: '100%',
    height: 50,
    borderRadius: 10, 
    borderColor: '#ffffff',
    borderWidth: 2,
    color: "#ffffff",
    paddingRight: 40, 
  },
  passwordContainer: {
    position: 'relative',
    width: '90%',
    height: 50,
    marginVertical: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: '20%',
  },
  checkboxText: {
    marginLeft: 10,
    color: '#ffffff',
  },
  linkText: {
    color: 'yellow',
  },
  continueButton: {
    width: 235,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 5,
  },
  buttonBackground: {
    width: 235,
    height: 80,
  },
  // Nové styly pro text a odkaz Login
  loginContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  loginText: {
    fontSize: 14,
    color: 'yellow',
  },
});
