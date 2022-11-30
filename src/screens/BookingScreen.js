import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';

const BookingScreen = () => {

  const [formData, setformData] = useState({
    name: 'User 01',
    dob: '',
    question: ''
  })

  return (
    <View style={styles.container}>
      <InputField
        label={'Full Name'}
        placeholder={'Enter Name'}
        value={formData.name}
        onChangeText={text => setformData({ ...formData, name: text })}
      />
      <InputField
        label={'Date of Birth'}
        placeholder={'Date of Birth'}
        value={formData.dob}
        dataDetectorTypes={'calendarEvent'}
        onChangeText={text => setformData({ ...formData, dob: text })}
      />
      <InputField
        label={'Write your question'}
        placeholder={'Write your question'}
        value={formData.question}
        onChangeText={text => setformData({ ...formData, question: text })}
      />
      <Button text={'Submit'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F3F1FF',
    flex: 1
  }
})

export default BookingScreen