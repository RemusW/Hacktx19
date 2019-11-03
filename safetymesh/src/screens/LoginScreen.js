import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles, {globalColors} from '../Styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Displays logo for app */}
        <View style={{height: '35%', justifyContent: 'center'}}>
          {/* <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
              /> */}
        </View>
        {/* Displays password and text input for app */}
        <KeyboardAvoidingView behavior="height">
          <View style={{height: '65%', marginTop: 25}}>
            <Text
              style={[
                globalStyles.primaryText,
                {textAlign: 'left', fontWeight: 'bold', paddingBottom: 5},
              ]}>
              Full Name
            </Text>
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              placeholderTextColor={globalColors.secondary}
              returnKeyType="next"
              //onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text
              style={[
                globalStyles.primaryText,
                {textAlign: 'left', fontWeight: 'bold', paddingBottom: 5},
              ]}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              placeholder="XXX-XXX-XXXX"
              placeholderTextColor={globalColors.secondary}
              returnKeyType="done"
              keyboardType="phone-pad"
              //ref={input => (this.passwordInput = input)}
            />
            {/* Displays login button which when pressed navigates to the home screen */}
            <TouchableOpacity
              style={globalStyles.buttonContainer}
              onPress={() => this.props.navigation.navigate('TabStackRouter')}>
              <Text style={[globalStyles.whiteText, {fontWeight: 'bold'}]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: globalColors.secondary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 70,
    width: 300,
    height: 250,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: globalColors.secondaryLight,
    marginBottom: 10,
    color: globalColors.primary,
    paddingHorizontal: 10,
    ...Platform.select({
      android: {
        borderRadius: 0,
      },
      ios: {
        borderRadius: 5,
      },
    }),
  },
});
