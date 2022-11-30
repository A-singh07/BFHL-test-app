import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import Search from './Search';
import Button from './Button';
import hand from '../assets/hi-hand.json';

const LandingSection = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const data = {
      email: '',
      token: ''
    }
    dispatch({ type: 'AUTH_USER', payload: data })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={styles.userName}>Hi, User</Text>
          <View style={styles.lottieContainer}>
            <Lottie source={hand} autoPlay loop />
          </View>
        </View>
        <Button
          small
          secondary
          text={'Logout'}
          onPress={handleLogout}
        />
      </View>
      <Search onFocus={() => navigation.navigate('Search')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 50,
    backgroundColor: '#F3F1FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  leftHeader: {
    flexDirection: 'row'
  },
  lottieContainer: {
    width: 50,
    height: 30
  },
  userName: {
    fontSize: 24,
    color: '#7B5BA8',
    fontWeight: 'bold',
  }
})

export default LandingSection