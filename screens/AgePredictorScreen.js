import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const AgePredictorScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [ageGroup, setAgeGroup] = useState('');

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const predictedAge = response.data.age;
      setAge(predictedAge);

      if (predictedAge < 18) {
        setAgeGroup('young');
      } else if (predictedAge < 60) {
        setAgeGroup('adult');
      } else {
        setAgeGroup('senior');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getImageForAgeGroup = () => {
    if (ageGroup === 'young') return require('../assets/Joven.jpg');
    if (ageGroup === 'adult') return require('../assets/adulto.jpg');
    if (ageGroup === 'senior') return require('../assets/anciano.jpg');
    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Age" onPress={predictAge} />
      {age !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Age: {age}</Text>
          <Text style={styles.resultText}>Category: {ageGroup}</Text>
          <Image source={getImageForAgeGroup()} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 10,
  },
  result: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default AgePredictorScreen;
