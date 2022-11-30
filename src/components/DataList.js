import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native'

const Item = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  )
}

const DataList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={Item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#fff',
    padding: 16
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  }
})

export default DataList