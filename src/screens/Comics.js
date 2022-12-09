import { View, Text, StyleSheet, ActivityIndicator, Alert, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataComics, searchCharacters } from '../redux/FetchComicsSlice';
import { ComicCard, SearchInput } from '../components'

export default function Comics() {
  const dispatch                    = useDispatch();
  const [filter, setFilter]         = useState("");
  const result                      = useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(fetchDataComics())
  }, [])

  const updateSearch = (text) => {
    setFilter(text);
    dispatch(searchCharacters(text));
  };

  if (result.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    )
  }

  if (!result.loading && result.error != '') {
    return (
      Alert.alert("ERROR", result.error)
    )
  }
  
  return (
    <View style={styles.container}>
      <SearchInput placeholderText='Search...' updateSearch={updateSearch} search={filter}/>
      <FlatList
        data={filter != '' ? result.searchResult : result.data}
        renderItem={({item}) => {
          return (
            <ComicCard item={item}/>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white'
  }
});