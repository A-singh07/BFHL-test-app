import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthStack from './AuthStack';

const NavigationProvider = () => {
  const userData = useSelector(state => state.user)

  return (
    <NavigationContainer>
      {userData.token ?
        <TabNav /> :
        <AuthStack />
      }
    </NavigationContainer>
  )
}

export default NavigationProvider