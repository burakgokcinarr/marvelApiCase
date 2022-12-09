import { View, Text } from 'react-native'
import React from 'react'
import { BottomTab } from './Tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {
    stackBarBackgroundColor,
    stackBarBackButtonColor
}  from './NavigationStyle';
import { CharacterDetail, ComicsDetail } from '../screens'

const Stack = createNativeStackNavigator();

export default function NavigationRouter() {
    return (
        <Stack.Navigator screenOptions={{headerShown: true, title: '' , headerStyle: { backgroundColor: stackBarBackgroundColor}, headerTintColor: stackBarBackButtonColor}}>
            <Stack.Screen name="bottom" component={BottomTab} />
            <Stack.Screen name="characterDetail" component={CharacterDetail} />
            <Stack.Screen name="comicsDetail" component={ComicsDetail} />
        </Stack.Navigator>
    )
}