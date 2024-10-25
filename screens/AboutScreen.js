import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Me.jpg')} style={styles.photo} />
      <Text style={styles.name}>Julio Lachapelle</Text>
      <Text style={styles.contact}>Email: lpdaniel681@gmail.com</Text>
      <Text style={styles.contact}>Phone: +1829-802-0824</Text>
      <Text style={styles.contact}>LinkedIn: https://www.linkedin.com/feed/</Text>
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
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default AboutScreen;
