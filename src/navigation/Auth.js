
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// 
import LoginScreen from '../screens/Auth/LoginScreen';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        options={{
            headerShown: false
        }}
        name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default Auth

