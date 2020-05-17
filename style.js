import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const colors = {
  dark: '#181716',
  color1: '#181716',
  black: '#111',
  orange: '#f37936',
  white: '#ffffff',
  color2: '#f3a34b',
  color3: '#07b9cf',
  darktrans: 'rgba(24, 23, 22, 0.8)',
  lighttrans: 'rgba(24, 23, 22, 0.3)',
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

export const create = StyleSheet.create({
  topSection: {
    flex: 1,
    height: windowHeight * 0.5,
    width: windowWidth,
    padding: 35,
    paddingTop: 120,
    backgroundColor: colors.lighttrans
  },
  imagebg: {
    width: windowWidth,
    height: windowHeight * 0.6,
  },
  namebar: {
    backgroundColor: colors.dark,
    borderRadius: 35,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  namebarText: {
    color: colors.white,
    padding: 10,
    fontSize: 17,
    letterSpacing: 1,
  },
  namebarClosebtn: {
    padding: 8,
  },
  namebarCloseText: {
    color: colors.white,
    fontSize: 24,
  },
  selectedView: {
    marginTop: 30,
    paddingVertical: 15,
  },
  imgContainer: {
    padding: 5,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2,
    position: 'relative'
  },
  face: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  
  faceClosebtn: {
    // position: 'absolute',
    // right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighttrans,
    width: 22,
    height: 22,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    right: 0
  },
  closeIcon: {
    fontSize: 17,
    color: colors.white,
    backgroundColor: colors.dark,
    borderRadius: 50,
  },
});
