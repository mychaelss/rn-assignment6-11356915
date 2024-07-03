// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './context/CartContext';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    {/* Add other screens here */}
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
};

export default App;
