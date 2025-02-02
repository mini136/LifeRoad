import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSignUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '40%',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    marginVertical: 20,
    width: '90%',
    height: '22%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Cursive',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    width: '100%', // TextInput je nyní plných 90 % šířky passwordContaineru
    height: 50,
    borderRadius: 10, 
    borderColor: '#ffffff',
    borderWidth: 2,
    color: "#ffffff",
    paddingRight: 40, // Místo pro ikonu "očka"
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: '30%',
  },
  checkboxText: {
    marginLeft: 10,
    color: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: '20%',
    alignSelf: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginBottom: 1,
    color: '#d3e6ac',
    fontSize: 16,
  },
  buttonBackground: {
    width: 235,
    height: 80,
  },
  continueButton: {
    width: 235,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
  },
  containerSignButt: {
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '5%',
  },
  signUpWithBack: {
    width: 250,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
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
  passwordContainer: {
    position: 'relative', // Aby byla ikona "očka" uvnitř kontejneru
    width: '90%',
    height: 50,
    marginVertical: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // Posunutí pro vycentrování ikonky ve středu výšky
  },
  linkText: {
    color: 'yellow', // nebo jakákoli barva, kterou preferuješ
    
  },
  headerText: {
    fontSize: 36, // Velikost textu
    fontFamily: 'MrDafoe', // Název vlastního fontu
    color: '#FFFFFF', // Barva textu
    textAlign: 'center',
    marginBottom: 20,
  },
  
});
