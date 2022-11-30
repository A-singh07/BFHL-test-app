import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeStack from './HomeStack';
import ActivePlansScreen from '../screens/ActivePlansScreen';
import EMICardScreen from '../screens/EMICardScreen';
import MyHealthScreen from '../screens/MyHealthScreen';
import MyRecordsScreen from '../screens/MyRecordsScreen';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator initialRouteName='HomeStack'>
      <Tab.Screen name='HomeStack' component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name='EMI Cards' component={EMICardScreen} />
      <Tab.Screen name='Active Plans' component={ActivePlansScreen} />
      <Tab.Screen name='My Health' component={MyHealthScreen} />
      <Tab.Screen name='My Records' component={MyRecordsScreen} />
    </Tab.Navigator>
  )
}

export default TabNav