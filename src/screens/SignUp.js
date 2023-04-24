import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { AuthContext } from '../AuthContext';
import theme from '../theme';

import { SERVER_URL } from './ApiCalls';
import axios from 'axios';


const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const { setIsAuthenticated } = useContext(AuthContext);

  async function handleSignup() {
    if(confirmPassword !== password) {
      window.alert("Make sure passwords match.");
      return;
    }
    if(confirmEmail !== email) {
      window.alert("Make sure emails match.");
      return;
    }
    credentials = {"username": username, "password": password, "email": email};
    const response = await axios.post(`${SERVER_URL}register`, JSON.stringify(credentials), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status != 200) {
      const message = `An error occured: ${response.statusText}`;
      window.alert(message);
      setIsAuthenticated(false);
      return;
    }
    navigation.navigate('SignUpSuccess');

  }

  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>Sign Up</Text>
      <Input value={username} onChangeText={setUsername} placeholder="Enter Username" placeholderTextColor={theme.colors.description}/>
      <Input value={email} onChangeText={setEmail} placeholder="Enter Email" placeholderTextColor={theme.colors.description} keyboardType="email-address" />
      <Input value={confirmEmail} onChangeText={setConfirmEmail} placeholder="Comfirm Email" placeholderTextColor={theme.colors.description} keyboardType="email-address"/>
      <Input value={password} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor={theme.colors.description} secureTextEntry/>
      <Input value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm Password" placeholderTextColor={theme.colors.description} secureTextEntry />
      
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.TextSignUp}>SIGN UP</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {navigation.navigate('Login');}}>
        <Text style={styles.TextBackLogIn}>Already have an account? Sign in</Text>
      </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    rowGap: 7
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

  TextBackLogIn: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.primary_focused
  },

  TextSignUp: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  TextTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  }
});

export default SignUp;
