import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PropsEquipment } from '../../../models/Equipment';
import { styles } from './styles';

interface dataEquipmentProps {
    data: PropsEquipment
}

const CardEquipment: React.FC<dataEquipmentProps> = ({ data }) => {
    return(
        <View key={data.id} style={styles.cardEquipment}>
            <View style={styles.cardHeaderEquipment}>
                <Text style={styles.title}>
                    {data.name}
                </Text>
            </View>
            <View style={styles.cardBodyEquipment}>
                <View style={styles.spaceIcon}>
                    <Icon name="weight-lifter" color='#fff' size={25}/>
                    <Text style={styles.detail}>
                        {data.current}Kg
                    </Text>
                </View>
                <View style={styles.spaceIcon}>
                    <Icon name="weight-kilogram" color='#fff' size={25}/>
                    <Text style={styles.detail}>
                        {data.next}Kg
                    </Text>
                </View>
            </View>
            <Text style={styles.description}>
                {data.description}
            </Text>
        </View>
    );
} 

export default CardEquipment;