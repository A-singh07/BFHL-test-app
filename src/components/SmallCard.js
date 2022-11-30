import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SmallCard = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      {
        title &&
        <Text style={styles.title}>{title}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 90,
    marginHorizontal: 6,
  },
  imageContainer: {
    width: 78,
    height: 78,
    borderRadius: 12,
    marginBottom: 6,
    backgroundColor: '#EAF0F7'
  },
  image: {

  },
  title: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#4B4B4B',
    textAlign: 'center'
  }
})

export default SmallCard