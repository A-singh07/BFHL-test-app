import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputField = ({ label, placeholder, value, ...rest }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#D3D3D3'}
        value={value}
        style={styles.input}
        {...rest}
      />
      {/* <Text style={styles.errorMsg}>{errorMsg}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18
  },
  label: {
    marginBottom: 8,
    fontSize: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: '#8E8E8E',
    fontSize: 16,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 18,
    color: '#4B4B4B'
  },
  placeholderText: {
    color: '#4B4B4B'
  },
  errorMsg: {
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 20
  }
})

export default InputField