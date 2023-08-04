import React from 'react';
import Users from './components/Users'
import Main from './components/Main'
import Details from './components/Details'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="home" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="admin" component={Users} />
                <Stack.Screen name="details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
