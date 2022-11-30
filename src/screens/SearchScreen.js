import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DataList from '../components/DataList';
import Search from '../components/Search';

const SearchScreen = () => {
  const [searchData, setSearchData] = useState('')

  const result = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'SEARCH_RESULT', payload: searchData })
  }, [searchData])

  return (
    <View style={styles.container}>
      <Search value={searchData} setValue={setSearchData} />
      <Text style={styles.text}>Symptoms:</Text>
      <DataList data={result} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F3F1FF',
    flex: 1
  },
  text: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 12
  }
})

export default SearchScreen