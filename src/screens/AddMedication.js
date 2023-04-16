import React , { useState } from 'react';
import { StyleSheet, View, Text,TextInput, Button,TouchableOpacity } from 'react-native';
import theme from '../theme';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';


const AddMedication = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [dosages, setDosages] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');
  const [pickerVisible, setPickerVisible] = useState({ dosages: false, frequency: false, time: false });

  const handleSave = () => {
    // Create a new medication object and go back to the previous screen
    const newMedication = { title, dosages, frequency, time };
    navigation.navigate('MyMedications', { newMedication });
  };

  const togglePicker = (field) => {
    setPickerVisible({ ...pickerVisible, [field]: !pickerVisible[field] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Text style={styles.label}>Take Pictures of My Medications</Text>
          <TouchableOpacity
          style={[
            styles.photoIcon,
          ]}  
          >
            <FontAwesome
              name={'camera'}
              size={32}
              color={theme.colors.black}
            />
          </TouchableOpacity>
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Medication Name</Text>
          <View style={styles.titleInputContainer}>
            <TextInput
              value={title}
              onChangeText={setTitle}
              style={styles.titleInput}
              placeholder="e.g. Tylenol"
            />
          </View>
        </View>

        {['dosages', 'frequency', 'time'].map((field) => (
          <View key={field}>
             <View style={styles.inputContainer}>
                <Text style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</Text>
                <TouchableOpacity
                    style={styles.titleInputContainer}
                    onPress={() => togglePicker(field)}
                >
              <Text style={styles.titleInput}>
                {field === 'dosages' ? (dosages ? `${dosages} pill(s)` : '') : field === 'frequency' ? (frequency ? `${frequency} time(s) per day` : '') : time}
              </Text>

            </TouchableOpacity>
            </View>
            {pickerVisible[field] && (
              <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={eval[field]}
                    onValueChange={(itemValue) => {
                    setPickerVisible({ ...pickerVisible, [field]: false });
                    if (field === 'dosages') {
                        setDosages(itemValue);
                    } else if (field === 'frequency') {
                        setFrequency(itemValue);
                    } else {
                        setTime(itemValue);
                    }
                    }}
                    style={styles.picker}
                >
                    {field === 'dosages' &&
                    [1, 2, 3, 4, 5].map((value) => (
                        <Picker.Item key={value} label={`${value} pill(s)`} value={value} />
                    ))}
                    {field === 'frequency' &&
                    [1, 2, 3, 4, 5].map((value) => (
                        <Picker.Item key={value} label={`${value} time(s) per day`} value={value} />
                    ))}
                    {field === 'time' &&
                    ['1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', 
                    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM', 
                    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'].map((value) => (
                        <Picker.Item key={value} label={`${value}`} value={value} />
                    ))}
                </Picker>
                </View>
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: theme.colors.background,
  },

  pictureContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    height: 80,
    padding: 25,
    marginTop: 20,
    flexDirection: 'row',
  },

  label: {
    fontSize: theme.text.fontSize.medium,
    fontWeight: 'bold',
    marginRight: 10,
  },

  fieldContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    height: 520,
    padding: 18,
    marginTop: 20,
  },

  inputContainer: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleInputContainer: {
    marginTop: 15,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: theme.borderRadius,
    paddingHorizontal: 16,
    flex: 1 ,
    flexDirection: 'row',
    justifyContent: 'left',
  },

  titleInput: {
    fontSize: 19,
    height: 49, 
    lineHeight: 25, 
    padding: 7,
  },

  picker: {
    width: '100%',
  },

  photoIcon: {
    width: 70,
    height: '100%',
    borderTopRightRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    top: -5,
  },

  button: {
      backgroundColor: theme.colors.black,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 18
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.colors.white,
    }
  
});

export default AddMedication;
