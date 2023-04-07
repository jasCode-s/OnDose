import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import CustomListItem from '../components/ListItem';
import theme from '../theme';
import * as Progress from 'react-native-progress';

const Reminders = () => {
  const fakeData = [
    { id: 1, title: 'Medication A', description: 'Take 2 Pills', completed: false, time: '8:00 AM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 2, title: 'Medication B', description: 'Take 1 Pill', completed: false, time: '6:00 PM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 3, title: 'Medication C', description: 'Take 1 Pill', completed: false, time: '6:00 PM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 4, title: 'Medication B', description: 'Take 1 Pill', completed: false, time: '6:30 PM', image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
  ];

  const [Meds, setMeds] = useState(fakeData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();

  const handleCompletePress = (MedId) => {
    setMeds((prevMeds) =>
      prevMeds.map((Med) =>
        Med.id === MedId ? { ...Med, completed: !Med.completed } : Med
      )
    );
  };

  const updateIndex = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  // Code adapted from https://dmitripavlutin.com/javascript-array-group/ and 
  // https://stackoverflow.com/questions/61939507/how-to-group-an-array-within-react-native on April 2nd, 2023 
  // main goal is to group the medications by taking time --> for displaying the meds on the screen
  const groupMedsByTime = (Meds) => {
    const groups = Meds.reduce((acc, Med) => {
      const group = acc.find((g) => g.time === Med.time);
      if (group) {
        group.Meds.push(Med);
      } else {
        acc.push({ time: Med.time, Meds: [Med] });
      }
      return acc;
    }, []); 

    return groups.sort((a, b) => new Date('2023/01/01 ' + a.time) - new Date('2023/01/01 ' + b.time));
  };

  const filterButtons = ['Uncompleted', 'Completed'];

  const filteredMeds = selectedIndex === 2 ? Meds : Meds.filter((Med) => Med.completed === (selectedIndex === 1));

  const groupedMeds = groupMedsByTime(filteredMeds);

  const totalMeds = Meds.length;
  const completedMeds = Meds.filter(Med => Med.completed).length;
  const progress = completedMeds / totalMeds;

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={filterButtons}
          containerStyle={styles.buttonGroupContainer}
          textStyle={{ color: theme.colors.text }}
          selectedButtonStyle={{ backgroundColor: theme.colors.primary_dark }}// selected button color
          selectedTextStyle={{ color: theme.colors.grey }}
          unselectedTextStyle={{ color: theme.colors.description }}
        />
        <Text style={styles.progressText}>
          Your Progress For Today ({completedMeds}/{totalMeds})
        </Text>
        <Progress.Bar
          progress={progress}
          width={null}
          height={10}
          borderRadius={5}
          color={theme.colors.secondary}
          unfilledColor={theme.colors.secondaryLight}
          borderWidth={0}
          style={styles.progressBar}
        />
      </View>
      <FlatList
        data={groupedMeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.timeGroupContainer}>
            <Text style={styles.timeHeading}>{item.time}</Text>
            {item.Meds.map((Med) => (
              <CustomListItem
                key={Med.id}
                item={Med}
                onCompletePress={() => handleCompletePress(Med.id)}
              />
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -40,
    paddingHorizontal: 20,
    rowGap: 10,
    width:'100%',
    backgroundColor: theme.colors.background

  },
  buttonGroupContainer: {
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 20,
    backgroundColor: theme.colors.unselected// unselected button color
  },
  timeHeading: {
    fontSize: theme.text.fontSize.large,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  timeGroupContainer: {
    flex: 1,
    paddingVertical: 20,
    rowGap: 10
  },
  progressContainer: {
    padding: 20,
  },
  progressText: {
    fontSize: theme.text.fontSize.large,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    borderRadius: 5,
  },
});

export default Reminders;
