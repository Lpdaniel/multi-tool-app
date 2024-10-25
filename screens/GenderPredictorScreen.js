import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const GenderPredictorScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const predictedGender = response.data.gender;
      setGender(predictedGender);

      if (predictedGender === 'male') {
        setBgColor('#add8e6'); 
      } else if (predictedGender === 'female') {
        setBgColor('#ffb6c1'); 
      } else {
        setBgColor('#ccc'); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Gender" onPress={predictGender} />
      {gender ? <Text style={styles.resultText}>Gender: {gender}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default GenderPredictorScreen;
