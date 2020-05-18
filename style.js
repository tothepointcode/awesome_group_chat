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
  gray: '#9e8f8d',
  darktrans: 'rgba(24, 23, 22, 0.8)',
  lighttrans: 'rgba(24, 23, 22, 0.3)',
};

const { orange, color2, color3 } = colors;
export const colorSet = [orange, color2, color3, '#0c349c', '#1cb8a8'];

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
    paddingTop: 110,
    backgroundColor: colors.lighttrans,
  },
  imagebg: {
    width: windowWidth,
    height: windowHeight * 0.6,
  },
  searchView: {
    position: 'relative',
  },
  searchbar: {
    backgroundColor: colors.dark,
    padding: 15,
    borderRadius: 35,
    color: colors.white,
    fontSize: 16,
    letterSpacing: 1,
    position: 'relative',
    paddingRight: 48,
  },
  searchbarCloseText: {
    color: colors.white,
    fontSize: 24,
  },
  close: {
    position: 'absolute',
    right: 15,
    top: 16,
  },
  selectedView: {
    marginTop: 30,
    paddingVertical: 5,
  },
  imgContainer: {
    padding: 5,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2,
    position: 'relative',
    width: 74,
  },
  face: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  faceClosebtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighttrans,
    width: 24,
    height: 24,
    borderRadius: 50,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  faceName: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 13,
    padding: 3,
  },
  closeIcon: {
    fontSize: 17,
    color: colors.white,
    backgroundColor: colors.dark,
    borderRadius: 50,
  },
  bottomSection: {
    height: windowHeight * 0.67,
    width: windowWidth,
    position: 'absolute',
    backgroundColor: colors.white,
    top: windowHeight * 0.37,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 35,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactDetails: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactHead: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
  },
  contactSub: {
    fontSize: 16,
    color: colors.gray,
  },
  contactCheck: {
    fontSize: 35,
    color: colors.orange,
  },
  contactUnCheck: {
    fontSize: 35,
    color: colors.dark,
    paddingRight: 0,
    marginRight: -3,
  },
  thinLine: {
    backgroundColor: colors.gray,
    height: 1,
    width: '70%',
    alignSelf: 'flex-end',
    marginVertical: 15,
  },
  next: {
    position: 'absolute',
    bottom: 10,
    right: 30,
    backgroundColor: colors.orange,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export const details = StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: colors.dark,
    color: colors.white,
    width: 100,
    height: 100,
    textAlign: 'center',
    padding: 35,
    borderRadius: 50,
    fontSize: 30,
  },
  profileRing: {
    borderWidth: 2,
    borderColor: colors.dark,
    borderRadius: 100,
    height: 110,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  edit: {
    backgroundColor: 'rgba(255,255,255, 0.8)',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 2,
    borderRadius: 50,
  },
  editTouchable: {
    backgroundColor: colors.dark,
    borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    color: colors.white,
    padding: 5,
    fontSize: 28,
  },
  headDetails: {
    padding: 10,
    alignItems: 'center',
  },
  subhead: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.white,
    paddingTop: 5
  },
  bottomHead: {
    fontSize: 25,
  },
  memberCount: {
    color: colors.white,
    backgroundColor: colors.color2,
    padding: 3,
    borderRadius: 50,
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10,
    minWidth: 30,
    textAlign: 'center',
  },
  faceName: {
    color: colors.dark,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    padding: 5,
  },
  imgContainer: {
    borderColor: colors.dark,
  },
  closebtn: {
    backgroundColor: colors.white,
  },
  closeIcon: {
    color: colors.orange,
    backgroundColor: null,
  },
  selectedView: {
    marginTop: 30,
    paddingVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 25,
  },
});

export const modal = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.darktrans,
    padding: 35,
    paddingTop: 100,
  },
  avatarView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: colors.dark,
    color: colors.white,
    textAlign: 'center',
    padding: 20,
    borderRadius: 50,
    fontSize: 30,
    margin: 5,
  },
  head: {
    fontSize: 20,
    color: colors.white,
    padding: 30,
    paddingTop: 10,

  },
  profileSelect: {
    backgroundColor: colors.dark,
    borderRadius: 50,
  },
  avatarDim: {
    opacity: 0.4
  },
  input: {
    backgroundColor: colors.darktrans,
    width: "100%",
    padding: 20,
    borderRadius: 30,
    fontSize: 16,
    marginVertical: 20,
    color: colors.white,
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    width: '48%',
    backgroundColor: 'red',
    borderRadius: 30,
    backgroundColor: colors.gray,
    padding: 20
  },
  buttonText: {
    fontSize: 17,
    color: colors.white,
    textAlign: 'center'
  },
  msg: {
    color: colors.white,
    fontSize: 12,
    padding: 15
  }
});
