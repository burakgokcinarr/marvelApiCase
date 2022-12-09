import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SearchBar } from '@rneui/themed';
import Style from './Style'

export default function SearchInput({placeholderText, updateSearch, search}) {
    return (
        <View style={Style.container}>
            <SearchBar
                placeholder={placeholderText}
                onChangeText={updateSearch}
                value={search}
                style={Style.color}
                containerStyle={Style.colorInputContainer}
            />
        </View>
    )
}