import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
// import { UserInputs } from './components/UserInputs';
import { AuthContext } from '../AuthContext';
import theme from '../theme';

const SignUpSuccess = ({navigation}) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    // logic for login
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextCongrats}>Congratulations!</Text>
      <Text style={styles.TextSuccess}>You've signed up successfully!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.TextLogin}>LOG IN</Text>
      </TouchableOpacity>

    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    rowGap:5
  },

  button: {
    fontWeight: 'bold',
    fontSize: 45,
    color: theme.colors.white,
    backgroundColor: theme.colors.black,
    height:60,
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 18
  },

  TextLogin: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  TextCongrats: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  TextSuccess: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 120
  }
});

export default SignUpSuccess;
