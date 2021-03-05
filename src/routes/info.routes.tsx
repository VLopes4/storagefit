import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Information from '../pages/Information';
import InfoTraining from '../components/info/Training';
import InfoWeight from '../components/info/Weight';
import InfoEquipment from '../components/info/Equipment';
import Develop from '../components/global/Develop';

const Stack = createStackNavigator();

export default function InfoRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Information" component={Information}/>
            <Stack.Screen name="InfoTraining" component={InfoTraining}/>
            <Stack.Screen name="InfoWeight" component={InfoWeight}/>
            <Stack.Screen name="InfoEquipment" component={InfoEquipment}/>
            <Stack.Screen name="Develop" component={Develop}/>
        </Stack.Navigator>
    );
}