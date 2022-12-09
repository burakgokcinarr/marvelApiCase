import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Card as CardItem, Icon } from '@rneui/themed';
import Style from './Style';

export default function CharacterCard({ item }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('characterDetail', {data: item})}>
            <CardItem>
                <CardItem.Title>{item.name}</CardItem.Title>
                <CardItem.Image source={{uri : item.thumbnail.path + '.' + item.thumbnail.extension}} style={Style.image}></CardItem.Image>
                <CardItem.Title>{item.description}</CardItem.Title>
                <CardItem.Divider />
                <View style={Style.row}>
                    <Text style={Style.infoText}>Total Comics : {item.comics.items.length}</Text>
                    <Text style={Style.infoText}>Total Story  : {item.stories.items.length}</Text>
                </View>
            </CardItem>
        </TouchableOpacity>
    )
}