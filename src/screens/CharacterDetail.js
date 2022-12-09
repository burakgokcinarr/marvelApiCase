import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Button } from '@rneui/themed';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

export default function CharacterDetail({route}) {

  const { data }  = route.params;

  const _handlePressButtonAsync = async (profileUrl) => {
    let result = await WebBrowser.openBrowserAsync(profileUrl);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: data.thumbnail.path + '.' + data.thumbnail.extension,
        }}
      />
      <Text style={styles.desc}>{data.description}</Text>
      <View style={styles.row}>
        <Text style={styles.infoText}>Total Comics : {data.comics.items.length}</Text>
        <Text style={styles.infoText}>Total Story  : {data.stories.items.length}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.infoText}>Total Series : {data.series.items.length}</Text>
        <Text style={styles.infoText}>Total Events  : {data.events.items.length}</Text>
      </View>
      <Button
        title="Marvel Profile"
        onPressIn={() => _handlePressButtonAsync(data.urls[0].url)}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
          alignSelf: 'center'
        }}
      />
      {
        data.comics.items.map((creator, index) => {
            return (
              <View key={index} style={styles.card}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.detailInfoText}><Ionicons name="create" size={24} color='white' />Name</Text>
                  <Text style={styles.detailInfoText}>{creator.name}</Text>
                </View>
              </View>
            )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'stretch',
    alignSelf: 'center',
    borderRadius: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  infoText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  detailInfoText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    flex: 1,
  },
  card: {
    borderRadius: 5, 
    padding: 5,
    backgroundColor: '#504a4a',
    flexDirection: 'column',
    margin: 5
  }
});