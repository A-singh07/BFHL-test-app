import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Search = ({ setValue, value, onFocus }) => {

  return (
    <TextInput
      style={styles.inputField}
      value={value}
      onChangeText={text => setValue(text)}
      onFocus={onFocus}
      autoFocus={!onFocus && true}
      placeholder={'Search symptoms...'}
      placeholderTextColor={'lightgrey'}
    />
  )
}

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#fff',
    color: '#4B4B4B',
  }
})

export default Search