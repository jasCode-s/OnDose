import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import ListDetail from '../components/ListDetail';

const MedDetail = ({ route }) => {
  const { medication } = route.params;

  const data = [
    { label: 'Ingredients', value: medication.ingredients },
    { label: 'Dosages', value: medication.dosage },
    { label: 'Side Effects', value: medication.sideEffects },
    { label: 'Interaction', value: medication.interaction },
  ];
  
  return (
    <View style={styles.container}>
      <ListDetail item={medication} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style = {styles.itemContainer}>
            <Text style={styles.label}>{item.label}:</Text>
            <Text style={styles.dataText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: '5%', //Move up
    alignContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
    rowGap:10,
  },

  itemContainer: {
    backgroundColor: theme.colors.unselected,
    borderRadius: theme.borderRadius,
    padding: 10,
    marginTop: 10,
  },

  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 18,
  },

  dataText: {
    fontSize: 16,
  }

  
});

export default MedDetail;
