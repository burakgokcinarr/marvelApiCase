import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Characters, Comics } from '../../screens';
import { Ionicons } from '@expo/vector-icons';
import  {tabBarbackgroundColor,
            iconSize,
            tabBarActiveTintColor,
            tabBarInactiveTintColor,
            firstTabName,
            secondTabName}  from '../NavigationStyle';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: tabBarbackgroundColor}, headerShown: false}}>
            <Tab.Screen name="characters" component={Characters} options={{
                title: firstTabName,
                tabBarLabel: firstTabName,
                tabBarActiveTintColor: tabBarActiveTintColor,
                tabBarInactiveTintColor:  tabBarInactiveTintColor,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" color={color} size={iconSize} />
                ),
            }}/>
            <Tab.Screen name="comics" component={Comics} options={{
                title: secondTabName,
                tabBarLabel: secondTabName,
                tabBarActiveTintColor: tabBarActiveTintColor,
                tabBarInactiveTintColor:  tabBarInactiveTintColor,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-list-circle" color={color} size={iconSize} />
                ),
            }}/>
        </Tab.Navigator>
    )
}