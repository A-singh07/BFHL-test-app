import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MotiView } from 'moti'

import SmallCard from '../components/SmallCard';
import LandingSection from '../components/LandingSection';
import CardSection from '../components/CardSection';

// data
import { upperTab, specialitySection } from '../data/homeScreenData';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.screenContainer}>
      <MotiView
        from={{ opacity: 0, left: 200 }}
        animate={{ opacity: 1, left: 0 }}
        transition={{ type: "spring", duration: 350 }}
      >
        <View style={styles.cardContainer}>
          {
            upperTab.map((res, i) =>
              <View style={styles.card} key={i}>
                <SmallCard
                  image={res.image}
                />
                <Text style={styles.cardTitle}>{res.title}</Text>
              </View>
            )
          }
        </View>
        <LandingSection />
        <View style={styles.bookingContainer}>
          <Text style={styles.bookingHeading}>Book an appointment</Text>
          <Button
            small
            text={'Book Now'}
            customStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
            onPress={() => navigation.navigate('Booking')}
          />
        </View>
        <CardSection
          heading={specialitySection.heading}
          subHeading={specialitySection.subHeading}
          cardData={specialitySection.cardData}
        />
      </MotiView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    maxWidth: 95
  },
  cardTitle: {
    marginHorizontal: 18,
    fontSize: 14,
    color: '#4B4B4B',
    textAlign: 'center',
  },
  bookingContainer: {
    paddingVertical: 48,
    paddingHorizontal: 10,
    // backgroundColor: '#F6F6F6'
  },
  bookingHeading: {
    fontSize: 24,
    color: '#4B4B4B',
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default HomeScreen