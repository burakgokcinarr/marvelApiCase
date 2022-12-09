import { View, Text, StyleSheet, ActivityIndicator, Alert, FlatList } from 'react-native'
import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataCharacters, searchCharacters } from '../redux/FetchCharacterSlice';
import { CharacterCard, SearchInput } from '../components';

export default function Characters() {

  const dispatch                    = useDispatch();
  const [filter, setFilter]         = useState("");
  const result                      = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchDataCharacters())
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
            <CharacterCard item={item}/>
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