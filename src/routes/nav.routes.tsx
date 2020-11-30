import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Add':
                            iconName = 'plus';
                            break;
                    }

                    return <Icon name={`${iconName}`} color={color} size={size}/>
                }
            })}
            tabBarOptions={{
                inactiveTintColor: 'gray',
                activeTintColor: '#00ad82',
                showLabel: false
            }}    
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Add" component={Home}/>
        </Tab.Navigator>
    );
}