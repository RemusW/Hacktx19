import React from 'react';
import {StatusBar, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ChatScreen from './src/screens/ChatScreen';
import LoginScreen from './src/screens/LoginScreen';
import globalStyles, {globalColors} from './src/Styles';

const ChatStack = createStackNavigator(
  {
    ChatRouter: {
      screen: ChatScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: globalColors.secondary,
      },
      headerTintColor: globalColors.white,
      headerTitle: 'Chat',
    },
  },
);

const AppStack = createSwitchNavigator(
  {
    TabStackRouter: {
      screen: ChatStack,
    },
    LoginScreenRouter: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'LoginScreenRouter',
  },
);

const AppContainer = createAppContainer(AppStack);

export default class App extends React.Component {
  render() {
    return (
      <View style={globalStyles.globalContainer}>
        <StatusBar barStyle="light-content" />
        <AppContainer />
      </View>
    );
  }
}
