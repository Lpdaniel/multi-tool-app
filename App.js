import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GenderPredictorScreen from './screens/GenderPredictorScreen';
import AgePredictorScreen from './screens/AgePredictorScreen';
import UniversitiesScreen from './screens/UniversitiesScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gender Predictor" component={GenderPredictorScreen} />
        <Stack.Screen name="Age Predictor" component={AgePredictorScreen} />
        <Stack.Screen name="Universities" component={UniversitiesScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}