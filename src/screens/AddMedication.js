import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import theme from '../theme';


const AddMedication = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Add Medication Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
});

export default AddMedication;
