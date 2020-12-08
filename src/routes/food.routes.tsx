import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Food from '../pages/Food';
import Fiber from '../components/food/Fiber';
import Protein from '../components/food/Protein';
import Carbohydrate from '../components/food/Carbohydrate';

const Stack = createStackNavigator();

export default function FoodRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Food" component={Food}/>
            <Stack.Screen name="Fiber" component={Fiber}/>
            <Stack.Screen name="Protein" component={Protein}/>
            <Stack.Screen name="Carbohydrate" component={Carbohydrate}/>
        </Stack.Navigator>
    );
}