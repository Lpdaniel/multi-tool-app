import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://wttr.in/Santo%20Domingo?format=%C+%t');
        setWeather(response.data);
      } catch (error) {
        setError('Error fetching weather data');
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : weather ? (
        <>
          <Text style={styles.cityName}>Santo Domingo, RD</Text>
          <Text style={styles.weatherDescription}>{weather}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
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
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherDescription: {
    fontSize: 20,
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default WeatherScreen;
