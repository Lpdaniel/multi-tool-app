import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    
    <Image source={require('../assets/toolbox.jpg')} style={styles.image} />

    
    <View style={styles.buttonContainer}>
      <Button
        title="Gender Predictor"
        onPress={() => navigation.navigate('Gender Predictor')}
      />
      <Button
        title="Age Predictor"
        onPress={() => navigation.navigate('Age Predictor')}
      />
      <Button
        title="Universities"
        onPress={() => navigation.navigate('Universities')}
      />
      <Button
        title="Weather in RD"
        onPress={() => navigation.navigate('Weather')}
      />
      <Button
        title="Latest News"
        onPress={() => navigation.navigate('News')}
      />
      <Button
        title="About Me"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30, 
  },
  buttonContainer: {
    width: '80%', 
    justifyContent: 'space-around', 
  },
});

export default HomeScreen;
