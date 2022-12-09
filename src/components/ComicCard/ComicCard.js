import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Card as CardItem, Icon } from '@rneui/themed';
import Style from './Style';

export default function ComicCard({ item }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('comicsDetail', {data: item})}>
            <CardItem>
                <CardItem.Title>{item.title}</CardItem.Title>
                <CardItem.Image source={{uri : item.thumbnail.path + '.' + item.thumbnail.extension}} style={Style.image}></CardItem.Image>
                <CardItem.Title>{item.description}</CardItem.Title>
                <CardItem.Divider />
                <View style={Style.row}>
                    <Text style={Style.infoText}>Total Page Count : {item.pageCount}</Text>
                </View>
            </CardItem>
        </TouchableOpacity>
    )
}