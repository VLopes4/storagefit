import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

interface HeaderProps {
    title: string;
    route: string;
}

const Header: React.FC<HeaderProps> = ({ title, route, children }) => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Icon onPress={() => { navigation.navigate(`${route}`) }} style={styles.icon} name="long-arrow-left"/>
                { children }
            </View>
            <Text style={styles.title}>
                { title }
            </Text>
        </View>
    );
}

export default Header;