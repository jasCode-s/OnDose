import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../theme';

const CustomListDetail = ({ item }) => {

  return (
    <View style={styles.container} >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    height: 80,
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: theme.imgrRadius,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: theme.text.fontWeight.bold,
    fontSize:20,
  },
  description: {
    color: theme.colors.gray,
    fontSize:18,
  },

});


export default CustomListDetail;
