import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SmallCard from './SmallCard';

const CardSection = ({ heading, subHeading, cardData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
      <View style={styles.cardContainer}>
        {
          cardData.map((res, i) =>
            i < 8 &&
            <SmallCard
              key={i}
              title={res.title}
              image={res.image}
            />
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8D9',
    paddingVertical: 48,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 24,
    // color: '#4B4B4B',
    color: '#7B5BA8',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subHeading: {
    fontSize: 14,
    color: '#4B4B4B',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  }
})

export default CardSection