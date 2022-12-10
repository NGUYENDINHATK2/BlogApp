
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import HomeScreen from '../screens/HomeScreen';
import SetiingScreen from '../screens/SetiingScreen';
const Main = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused,color, size }) => focused ? <Entypo name="home" size={size} color={color} /> : <Entypo name="home" size={size} color={color} />,
                }}
                name="Home" component={HomeScreen} />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused,color, size }) => focused ? <Ionicons name="settings" size={size} color={color} /> : <Ionicons name="settings-outline" size={size} color={color} />,
                }}
                name="Setiing" component={SetiingScreen} />
        </Tab.Navigator>
    )
}

export default Main

