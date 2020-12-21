import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Add from '../pages/Add';
import Weight from '../components/add/Weight';
import Training from '../components/add/Training';
import Equipment from '../components/add/Equipment';
import Menu from '../components/add/Menu';


const Stack = createStackNavigator();

export default function AddRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Add" component={Add}/>
            <Stack.Screen name="Weight" component={Weight}/>
            <Stack.Screen name="Training" component={Training}/>
            <Stack.Screen name="Equipment" component={Equipment}/>
            <Stack.Screen name="Menu" component={Menu}/>
        </Stack.Navigator>
    );
}