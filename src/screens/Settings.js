import React, {useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { AuthContext } from '../AuthContext';
import theme from '../theme';

const Settings = ({ navigation }) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
      <Text style={styles.TextSettings}>Account Settings</Text>
      </View>

      <View style={styles.settingContainer2}>
      <Text style={styles.TextSettings}>Notification Settings</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.TextLogout}>LOG OUT</Text>
      </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    alignContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
    rowGap:10
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
    marginTop: 455,
    borderRadius: 18,
  },

  TextLogout: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  TextSettings: {
    flex: 1,
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    height: 80,
    marginTop: -70,
  },

  settingContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    height: 80,
    marginTop: 0,
  }
  
});

export default Settings;
