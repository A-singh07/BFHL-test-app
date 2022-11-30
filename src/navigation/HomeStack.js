import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='Booking' component={BookingScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack