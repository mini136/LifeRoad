import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',       // Zajištění šířky pozadí
    height: '100%',      // Zajištění výšky pozadí
    resizeMode: 'cover', // Přizpůsobení obrázku
    overflow: 'hidden',  // Skrytí přesahujících částí
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '60%',
    marginLeft: '5%',
    width: '90%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'center',
    position: 'relative', // Aby mohl být trojúhelník za textem
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 10, // Nejdelší strana (směřuje doprava)
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'black', // Trojúhelník bude černý a otočený doprava
    position: 'absolute',
    right: 10, // Posunutí na pravou stranu tlačítka
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 50,
    alignSelf: 'center',
  },
});
