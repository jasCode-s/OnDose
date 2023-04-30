import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../theme';
import Collapsible from 'react-native-collapsible';

const CustomListItem = ({ item, onDetailPress, onTakePress }) => {
  const istaken = item.taken;

  // Code adapted from https://snack.expo.dev/embedded/@aboutreact/collapsible-and-accordion-view-in-react-native?iframeId=h1ftiunob9&preview=true&platform=ios&theme=dark on April 8th
  // Collapse items using Caollapsible
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => setIsCollapsed(!isCollapsed)}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.markerButton,
            {
              backgroundColor: istaken ? theme.colors.red : theme.colors.green,
            },
          ]}
          onPress={onTakePress}
        >
          <FontAwesome
            name={istaken ? 'times' : 'check'}
            size={35}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed} style={styles.collapseView}>
        <View style={styles.collapseContainer}>
          <Text style={styles.collapseText1}>Time Left: {item.timesLeft}</Text>
          <Text style={styles.collapseText2}>Side Effects: </Text>
          <Text>{item.sideEffects}</Text>
        </View>
      </Collapsible>
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
    fontSize: theme.text.fontSize.medium,
    fontWeight: theme.text.fontWeight.bold,
    marginBottom: 7
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
  collapseContainer: {
    backgroundColor: theme.colors.unselected,
    padding: 15,
    width:'100%',
    borderRadius: theme.imgrRadius,
  },
  collapseView:{
    marginTop: 10,
    height: 160,
  },
  collapseText1: {
    marginBottom: 10,
    fontWeight:'bold'
  },
  collapseText2: {
    marginBottom: 4,
    fontWeight:'bold'
  }
});


export default CustomListItem;
