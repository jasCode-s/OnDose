import React, { } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import theme from '../theme';

const ResetPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>Reset Your Password</Text>
      <Text style={styles.TextInstruction}>Please enter the email associated with your account below. And you will receive an email to reset your password</Text>
      <Input placeholder="Enter Your Email" placeholderTextColor={theme.colors.description} keyboardType="email-address" />
      
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('ResetPasswordSuccess');}}>
            <Text style={styles.Textbutton}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {navigation.navigate('Login');}}>
        <Text style={styles.TextBackLogIn}>Remember your password? Sign in</Text>
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
    marginTop: 40,
    borderRadius: 18
  },

  TextBackLogIn: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    color: theme.colors.primary_focused
  },

  Textbutton: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },

  TextTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 220
  },

  TextInstruction: {
    fontSize: theme.text.fontSize.medium,
    fontWeight: '500',
    marginBottom: 20,
    width:'95%',
    textAlign: 'center'
  }
});

export default ResetPassword;
