import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../theme';

const CustomListItem = ({ item, onDetailPress, onCompletePress }) => {
  const isCompleted = item.completed;

  return (
    <TouchableOpacity style={styles.container} onPress={onDetailPress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.markerButton,
          {
            backgroundColor: isCompleted ? theme.colors.red : theme.colors.green,
          },
        ]}
        onPress={onCompletePress}
      >
        <FontAwesome
          name={isCompleted ? 'times' : 'check'}
          size={35}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </TouchableOpacity>
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
    fontSize: theme.text.fontSize.medium,
    fontWeight: theme.text.fontWeight.bold,
  },
  description: {
    fontSize: theme.text.fontSize.small,
    color: theme.colors.gray,
  },
  markerButton: {
    width: 71,
    height: '100%',
    borderTopRightRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default CustomListItem;
