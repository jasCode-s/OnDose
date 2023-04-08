import React, {} from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';


const MyMedications = ({ navigation, route }) => {
  const fakeData = [
    { id: 1, title: 'Medication A', description: 'Take 2 Pills', completed: false, time: '8:00 AM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 2, title: 'Medication B', description: 'Take 1 Pill', completed: false, time: '6:00 PM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 3, title: 'Medication C', description: 'Take 1 Pill', completed: false, time: '6:00 PM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 4, title: 'Medication B', description: 'Take 1 Pill', completed: false, time: '8:30 PM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
  ];

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    rowGap:5
  },
});


export default MyMedications;