import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
// import { UserInputs } from './components/UserInputs';
import { AuthContext } from '../AuthContext';
import theme from '../theme';

const Login = ({navigation}) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    // logic for login
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextWelcome}>Welcome to OnDose!</Text>
      <Image
        style={styles.Logo}
        source={require('../../assets/Logo.png')}
      />
      <Input placeholder="Enter Your Email" placeholderTextColor={theme.colors.description} keyboardType="email-address"/>
      <Input placeholder="Enter Your Password" placeholderTextColor={theme.colors.description} secureTextEntry/>
      <TouchableOpacity style={styles.createAccountButton} onPress={() => {navigation.navigate('SignUp');}}>
        <Text style={styles.TextCreateAccount}>Forget password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.TextLogin}>LOG IN</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={() => {navigation.navigate('SignUp');}}>
        <Text style={styles.TextCreateAccount}>Don't have an account? Click here!</Text>
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

  TextCreateAccount: {
      fontWeight: '500',
      fontSize: 18,
      textAlign: 'center',
      color: theme.colors.primary_focused
  },

  TextLogin: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  Logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },

  TextWelcome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default Login;
