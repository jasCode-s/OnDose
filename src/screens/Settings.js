import React, {} from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
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
  
});

export default Settings;
