import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { AuthContext } from '../AuthContext';
import theme from '../theme';

const SignUp = ({ navigation }) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSignup = () => {
    // add signup
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.TextTitle}>Sign Up</Text>
      <Input placeholder="Enter Username" placeholderTextColor={theme.colors.description}/>
      <Input placeholder="Enter Email" placeholderTextColor={theme.colors.description} keyboardType="email-address" />
      <Input placeholder="Comfirm Email" placeholderTextColor={theme.colors.description} keyboardType="email-address"/>
      <Input placeholder="Enter Password" placeholderTextColor={theme.colors.description} secureTextEntry/>
      <Input placeholder="Confirm Password" placeholderTextColor={theme.colors.description} secureTextEntry />
      
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
