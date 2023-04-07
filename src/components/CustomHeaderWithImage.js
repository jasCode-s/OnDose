// src/components/CustomHeaderWithImage.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../theme';

const CustomHeaderWithImage = ({ navigation, headerImage, showBackButton = false }) => {
  return (
    <View style={styles.headerContainer}>
      {showBackButton ? (
        <>
          <TouchableOpacity
            style={styles.backIconContainer}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="arrow-left" size={30} color={theme.colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileIconContainer} onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5 name="user-alt" size={30} color={theme.colors.primary_focused} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.empty}></View>
          <Image source={headerImage} style={styles.headerImage} resizeMode="contain" />
          <TouchableOpacity style={styles.profileIconContainer} onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5 name="user-alt" size={30} color={theme.colors.black} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.primary,
    height: 126,
    paddingTop: 40, // Change this value to move the tab header lower
  },
  empty: {
    flex: 1
  },
  backButton: {
    flex: 1
  },
  headerImage: {
    flex: 1,
    maxWidth: 96,
    alignSelf: 'center',
  },
  profileIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  }
});

export default CustomHeaderWithImage;
