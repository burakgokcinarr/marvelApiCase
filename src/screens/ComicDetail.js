import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, {useState} from 'react';
import { Button, ButtonGroup } from '@rneui/themed';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons } from '@expo/vector-icons';

export default function ComicsDetail({route}) {

  const { data }  = route.params;
  const [selectedIndex, setSelectedIndex]     = useState(0);

  const _handlePressButtonAsync = async (profileUrl) => {
    let result = await WebBrowser.openBrowserAsync(profileUrl);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: data.thumbnail.path + '.' + data.thumbnail.extension,
        }}
      />
      <Text style={styles.desc}>{data.description}</Text>
      <View style={styles.row}>
        <Text style={styles.infoText}>Total Page Count : {data.pageCount}</Text>
        <Text style={styles.infoText}>Total Story  : {data.stories.items.length}</Text>
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
      <ButtonGroup
      buttons={['Creator', 'Characters']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
      }}
      containerStyle={{ marginBottom: 20 }}
      selectedButtonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)'}}
      />
      {
        selectedIndex == 0 ? (
          data.creators.items.map((creator, index) => {
            return (
              <View key={index} style={styles.creatorCard}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.detailInfoText}><Ionicons name="create" size={24} color='white' />Creator Name</Text>
                  <Text style={styles.detailInfoText}>{creator.name}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.detailInfoText}><Ionicons name="create" size={24} color='white' />Role</Text>
                  <Text style={styles.detailInfoText}>{creator.role}</Text>
                </View>
              </View>
            )
          })
        ) : (
          data.characters.items.map((character, index) => {
            return (
              <View key={index} style={styles.creatorCard}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.detailInfoText}>Name</Text>
                  <Text style={styles.detailInfoText}>{character.name}</Text>
                </View>
              </View>
            )
          })
        )
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
    resizeMode: 'strech',
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
    flex: 1
  },
  creatorCard: {
    borderRadius: 5, 
    padding: 5,
    backgroundColor: '#504a4a',
    flexDirection: 'column',
    margin: 5
  }
});