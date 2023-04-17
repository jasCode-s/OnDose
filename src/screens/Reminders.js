import React, { useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Provider, Snackbar } from 'react-native-paper';

import CustomListItem from '../components/ListItem';
import theme from '../theme';
import * as Progress from 'react-native-progress';

const Reminders = () => {
  const fakeData = [
    { id: 1, name: 'Medication A', description: 'Take 2 Pills', completed: false, time: '8:00 AM', timesLeft: 1,
    sideEffects: 'Vivid dreams or nightmares; Short-term feelings of depression; Irritability, Stomach cramps; Diarrhea; Constipation; Decreased appetite', 
    image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 2, name: 'Medication B', description: 'Take 1 Pill', completed: false, time: '6:00 PM', 
    sideEffects: 'burning or stinging; irritation inside the nose; runny nose; sneezing', timesLeft: 2,
    image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 3, name: 'Medication C', description: 'Take 1 Pill', completed: false, time: '6:00 PM', timesLeft: 1,
    sideEffects:'red, peeling or blistering skin; rash; itching; swelling of the face, throat, tongue, lips, eyes, hands, feet, ankles, or lower legs; hoarseness; difficulty breathing or swallowing', 
    image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
    { id: 4, name: 'Medication B', description: 'Take 1 Pill', completed: false, time: '8:30 PM', 
    sideEffects: 'burning or stinging; irritation inside the nose; runny nose; sneezing', timesLeft: 2,
    image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
  ];

  const [Meds, setMeds] = useState(fakeData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();

  // Code adapted from https://callstack.github.io/react-native-paper/4.0/snackbar.html for bottom snakerbar notification on April 8th, 2023
  // Snackbar for reminder to be displayed 
  const [visible, setVisible] = useState(false);
  const onShowSnackBar = () => setVisible(true);
  const onDismissSnackBar = () => setVisible(false);

  const handleCompletePress = (MedId, MedTime, MedTitle, MedCompleted) => {
    var currHour = new Date().getHours();
    var currMin = new Date().getMinutes();
    var medTimeLen = MedTime.length;
    var medHour = medTimeLen == 7 ? MedTime.substring(0, 1) : MedTime.substring(0, 2);
    var medMin = medTimeLen == 7 ? MedTime.substring(2, 4) : MedTime.substring(3, 5);
    var AMORPM = medTimeLen == 7 ? MedTime.substring(5, 7) : MedTime.substring(6, 8);

    var intmedHour = AMORPM === "PM" ? parseInt(medHour) + 12 : parseInt(medHour);
    var canTake = false;
    if (parseInt(currHour) < intmedHour) {
      canTake = false; // 13:58 < 14:00

    } else if (parseInt(currHour) == intmedHour) {
      if (parseInt(currMin) < parseInt(medMin)) {
        canTake = false; // 14:15 < 14:22
      } else {
        canTake = true; // 14:22 = 14:22 or 14:25 < 14:22
      }
    } else { // parseInt(currHour) > parseInt(medHour)
      canTake = true; // 15:00 > 14:22
    }

    if (!canTake) {
      onShowSnackBar();// pop snakerbar notification
    }
    setMeds((prevMeds) =>
      prevMeds.map((Med) => 
        ((Med.id === MedId) && canTake) ? { ...Med, completed: !Med.completed } : Med).map((Med) =>
          ((Med.name === MedTitle) && canTake) ? { ...Med, timesLeft: MedCompleted ? Med.timesLeft + 1 : Med.timesLeft - 1 } : Med
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
    <Provider>
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={filterButtons}
            containerStyle={styles.buttonGroupContainer}
            textStyle={{ color: theme.colors.text }}
            selectedButtonStyle={{ backgroundColor: theme.colors.primary }}// selected button color
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
          renderItem={({ item }) => (
            <View style={styles.timeGroupContainer}>
              <Text style={styles.timeHeading}>{item.time}</Text>
              {item.Meds.map((Med) => (
                <CustomListItem
                  key={Med.id}
                  item={Med}
                  onCompletePress={() => handleCompletePress(Med.id, Med.time, Med.name, Med.completed)}
                />
              ))}
            </View>
          )}
        />
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={styles.snackbar}
          duration={1800}
        >
          A Friendly Reminder: It's not the time yet.
        </Snackbar>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -40,
    paddingHorizontal: 20,
    rowGap: 10,
    width: '100%',
    backgroundColor: theme.colors.background

  },
  snackbar: {
    width:'90%',
    marginLeft:'11%',
    backgroundColor: theme.colors.primary_focused,
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
    marginTop: 5,
  },
  timeGroupContainer: {
    flex: 1,
    paddingVertical: 20,
    rowGap: 10,
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
