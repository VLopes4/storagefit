import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = ({ children, name }) => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Icon onPress={() => { navigation.navigate('Add') }} style={styles.icon} name="long-arrow-left"/>
                { children }
            </View>
            <Text style={styles.title}>
                Adicionar { name }
            </Text>
        </View>
    );
}

export default Header;