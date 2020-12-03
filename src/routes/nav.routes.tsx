import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import Home from '../pages/Home';
import Food from '../pages/Food';

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
                        case 'Food':
                            iconName = 'silverware-fork-knife';
                            break;
                        case 'Information':
                            iconName = 'book-information-variant';
                            break;
                        case 'Training':
                            iconName = 'weight-lifter';
                            break;
                    }

                    return <Icon name={`${iconName}`} color={color} size={size}/>
                }
            })}
            tabBarOptions={{
                inactiveTintColor: 'gray',
                activeTintColor: '#005187',
                showLabel: false
            }}    
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Food" component={Food}/>
            <Tab.Screen 
                name="Add" 
                component={Home} 
                options={() => ({
                    tabBarIcon: ({ focused }) => (
                        <LinearGradient style={styles.iconTabRound} start={{ x: 2, y: 0 }} end={{ x: 0, y: 0 }} colors={focused ? ['#b2eaff', '#5389f2', '#003265'] : ['#9e9e9e', '#808080', '#575757']}>
                            <Icon name='plus' color='#fff' size={35}/>
                        </LinearGradient>
                    )
                })}
            />
            <Tab.Screen name="Information" component={Home}/>
            <Tab.Screen name="Training" component={Home}/>
        </Tab.Navigator>
    );
}