import {Dimensions, Platform, StyleSheet} from 'react-native';

export const platform = Platform.OS;
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export const globalColors = {
  white: '#f6f6f6',
  black: '#000000',
  grey: '#bdc6cf',
  lightGrey: '#e9e9e9',
  primary: '#fcda05',
  primaryLight: '#fffbe0',
  secondary: '#5651ff',
  secondaryLight: '#6681ff',
  tertiary: '#ffab7c',
};

const globalStyles = StyleSheet.create({
  globalContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: globalColors.white,
  },
  whiteContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: globalColors.white,
    alignItems: 'center',
  },
  primaryContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: globalColors.primary,
    alignItems: 'center',
  },
  secondaryContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: globalColors.secondary,
    alignItems: 'center',
  },
  whiteText: {
    color: globalColors.white,
    textAlign: 'center',
  },
  greyText: {
    color: globalColors.grey,
    textAlign: 'center',
  },
  blackText: {
    color: globalColors.black,
    textAlign: 'center',
  },
  primaryText: {
    color: globalColors.primary,
    textAlign: 'center',
  },
  secondaryText: {
    color: globalColors.secondary,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: globalColors.primary,
    height: 40,
    width: 250,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        borderRadius: 40,
      },
      ios: {
        borderRadius: 5,
      },
    }),
  },
  iconContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  header: {
    textAlign: 'left',
    color: globalColors.secondary,
    fontSize: 20,
    fontWeight: '700',
  },
  largeHeader: {
    textAlign: 'left',
    color: globalColors.primary,
    fontSize: 35,
    fontWeight: '700',
  },
});

export default globalStyles;
