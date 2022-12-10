
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Auth from './Auth';
import Main from './Main';
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Auth'
            >
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Auth" component={Auth} />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack

