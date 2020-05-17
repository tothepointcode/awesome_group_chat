import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const colors = {
  dark: '#181716',
  color1: '#181716',
  black: '#111',
  orange: '#f37936',
  white: '#ffffff',
  color2: '#f3a34b',
  color3: '#07b9cf',
  darktrans: 'rgba(24, 23, 22, 0.8)',
};

export const basic = StyleSheet.create({
  body: {
    padding: 25,
    flex: 1,
  },
});

export const welcome = StyleSheet.create({
  background: {
    height: windowHeight + 65,
    width: windowWidth,
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darktrans,
  },
  welcomeText: {
    fontSize: 39,
    color: colors.white,
    letterSpacing: 2,
  },
  welcomeText2: {
    fontSize: 16,
    color: colors.white,
    letterSpacing: 1,
    paddingBottom: 30,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: colors.color2,
    height: 70,
    width: windowWidth * 0.4,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  icon: {
    fontSize: 30,
    color: colors.white,
  },
});
