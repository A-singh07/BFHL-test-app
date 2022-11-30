import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputField = ({ label, placeholder, value, error, helperText, ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#c7c7c7'}
        value={value}
        style={[
          styles.input,
          error && { borderColor: 'red', borderWidth: 1 }
        ]}
        {...rest}
      />
      {
        helperText &&
        <Text style={styles.helperText}>{helperText}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    marginBottom: 8,
    fontSize: 20,
    color: 'black'
  },
  input: {
    backgroundColor: '#FAF9FF',
    fontSize: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    color: '#4B4B4B',
    shadowColor: "#c7c7c7",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    elevation: 6
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
  },
  helperText: {
    fontSize: 12,
    color: '#a7a7a7',
    height: 18,
    marginTop: 6,
    marginLeft: 8
  }
})

export default InputField