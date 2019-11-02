import React from 'react';
import { StatusBar, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";

const AppStack = createSwitchNavigator(
  {
      TabStackRouter: {
          screen: HomeScreen
      },
      LoginScreenRouter: {
          screen: LoginScreen
      }
  },
  {
      initialRouteName: 'LoginScreenRouter',
  }
);

const AppContainer = createAppContainer(AppStack);

export default class App extends React.Component {

  render() {
      return (
          <View>
              <StatusBar barStyle="light-content"/>
              <AppContainer/>
          </View>
      );
  }
}