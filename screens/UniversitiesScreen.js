import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import axios from 'axios';

const UniversitiesScreen = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter country name (e.g., Dominican Republic)"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Get Universities" onPress={fetchUniversities} />
      <ScrollView style={styles.scrollView}>
        {universities.map((univ, index) => (
          <View key={index} style={styles.university}>
            <Text style={styles.universityName}>{univ.name}</Text>
            <Text style={styles.universityDomain}>{univ.domains[0]}</Text>
            <Text style={styles.universityLink} onPress={() => Linking.openURL(univ.web_pages[0])}>
              Visit Website
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
  },
  scrollView: {
    marginTop: 10,
  },
  university: {
    marginBottom: 15,
  },
  universityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  universityDomain: {
    fontSize: 14,
  },
  universityLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default UniversitiesScreen;
