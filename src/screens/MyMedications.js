import React, {useState, useContext, useEffect} from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import theme from '../theme';
import CustomListItem from '../components/ListMedOnly';
import MedDetail from './MedDetail';
import AddMedication from './AddMedication';


const fakeData = [
  { __id: 1, title: 'Medication A', description: 'Take 2 Pills', completed: false, time: '8:00 AM', 
  ingredients: 'Melatonin 5mg, Xylitol, Cellulose Gum, Soy Polysacchrides, Maltodertrin, Dextrose',
  dosages: 'Take 2 pills each time. Once per day.',
  sideEffects: 'Vivid dreams or nightmares; Short-term feelings of depression; Irritability, Stomach cramps; Diarrhea; Constipation; Decreased appetite', 
  interaction: 'No major interactions is found in current prescription. No major interactions is found with my allergies.',
  image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
  { __id: 2, title: 'Medication B', description: 'Take 1 Pill', completed: false, time: '6:00 PM', 
  ingredients: 'Zincum aceticum 2x, Zincum gulconicum 1x',
  dosages: 'Take 1 pill each time. Two times a day.',
  sideEffects: 'burning or stinging; irritation inside the nose; runny nose; sneezing',
  interaction: 'No major interactions is found in current prescription. No major interactions is found with my allergies.',
  image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
  { __id: 3, title: 'Medication C', description: 'Take 1 Pill', completed: false, time: '6:00 PM', 
  ingredients:'Acetaminophen 500mg',
  dosages: 'Take 1 pill per day.',
  sideEffects: 'burning or stinging; irritation inside the nose; runny nose; sneezing',
  interaction: 'No major interactions is found in current prescription. No major interactions is found with my allergies.',
  image: 'https://images.albertsons-media.com/is/image/ABS/960104140-ECOM?$ng-ecom-pdp-tn$&defaultImage=Not_Available' },
];


const MedicationItem = ({ medication }) => (
  <View style={styles.medicationItem}>
    <Image source={medication.image} style={styles.medicationImage} />
    <View style={styles.medicationInfo}>
      <Text style={styles.medicationTitle}>{medication.name}</Text>
      <Text style={styles.medicationDosage}>{medication.dosage}</Text>
      <Text style={styles.medicationDosage}>{medication.__id}</Text>
      <Text style={styles.medicationDosage}>{medication.ingredients}</Text>
      <Text style={styles.medicationDosage}>{medication.sideEffects}</Text>
      <Text style={styles.medicationDosage}>{medication.interaction}</Text>
    </View>
  </View>
);

const MyMedications = ({ navigation }) => {
  const [Meds, setMeds] = useState([]);

  useEffect(() =>{
    async function getMedications() {
      const response = await fetch(`https://eighty-carrots-roll-67-244-21-223.loca.lt/get-medications/`);
      
      if(!response.ok) {
        const message = `An error occured: ${response.statusText}$`;
        console.log(response.json());
        window.alert(message);
        return;
      }

      const Meds = await response.json();
      setMeds(Meds);
    }

    getMedications();
    return;
  }, [Meds.length]);

  // This method will map out the records on the table
 function medicationList() {
  return Meds.map((med) => {
    return (
      <MedicationItem
        medication={med}
        key={med._id}
        onDetailPress={() => {
          navigation.navigate('MedDetail', { medication: Med});
        }}
      />
    );
  });
}

  const handleMedicationPress = (medication) => {
    navigation.navigate('MedDetail', { medication });
  };


   // group Med by ID
   const groupMeds = (Meds) => {
    const groups = Meds.reduce((acc, Med) => {
      const group = acc.find((g) => g.id === Med.id);
      if (group) {
        group.Meds.push(Med);
      } else {
        acc.push({id: Med.id, Meds: [Med] });
      }
      return acc;
    }, []);
    
    return groups.sort();
  } 

  const groupedMeds = groupMeds(Meds);

  function AddMed() {
    // add new medication
    navigation.navigate('AddMedication');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Your Medications
      </Text>

      <FlatList
        data={Meds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.idGroupContainer}>
            {medicationList()}
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={AddMed}>
            <Text style={styles.TextAddMed}>Add A New One</Text>
      </TouchableOpacity>

      

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
    rowGap:5
  },

  headerText: {
    fontSize: theme.text.fontSize.large,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:15, 
  },

  button: {
    fontWeight: 'bold',
    fontSize: 45,
    color: theme.colors.white,
    backgroundColor: theme.colors.black,
    height:60,
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 18
  },

  idGroupContainer: {
    flex: 1,
    paddingVertical: 10,
    rowGap: 10,
  },

  TextAddMed: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  medicationImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  medicationInfo: {
    flex: 1,
    marginLeft: 10,
  },

  medicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  medicationDosage: {
    fontSize: 15,
  },

});


export default MyMedications;