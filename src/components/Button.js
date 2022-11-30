import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const Button = ({ text, onPress, small, secondary, customStyle, ...rest }) => {

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.btnPressed,
        styles.btn,
        small && styles.smallBtn,
        secondary && styles.secondaryBtn,
        customStyle
      ]}
      onPress={onPress}
      {...rest}
    >
      <Text style={[
        styles.btnText,
        small && styles.smallText,
        secondary && styles.secondaryText
      ]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#7B5BA8',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  smallBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#7B5BA8'
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 14
  },
  secondaryText: {
    color: '#7B5BA8'
  },
  btnPressed: {
    backgroundColor: '#a289c4'
  },
})

export default Button