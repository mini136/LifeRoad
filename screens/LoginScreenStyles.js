import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',       // Zajištění šířky pozadí
    height: '100%',      // Zajištění výšky pozadí
    resizeMode: 'cover', // Přizpůsobení obrázku
    overflow: 'hidden',  // Skrytí přesahujících částí
  },
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  loginTitle: {
    top: '-10%',
    aspectRatio: 1.9,
    width: '80%',
    overflow: 'visible',
  },
  loginTitleBackground: {
    height: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  linkText: {
    color: 'yellow',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginButton: {
    width: 235,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 60,
  },
  buttonBackground: {
    width: 235,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  headerText: {
    fontSize: 36,
    fontFamily: 'MrDafoe',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 100,
  },
  // Nové styly pro text pro registraci
  registerContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  registerText: {
    fontSize: 14,
    color: 'yellow',
  },
});
