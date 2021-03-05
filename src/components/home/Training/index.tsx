import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PropsTraining } from '../../../models/Training';
import getRealm from '../../../services/realm';
import { styles } from './styles';

interface dataTrainingProps {
    data: PropsTraining
}

const CardTraining: React.FC<dataTrainingProps> = ({ data }) => {
    
        return(
            <View key={data.id} style={styles.cardTraining}>
                <View style={styles.cardHeaderTraining}>
                    <Text style={styles.title}>
                        {data.title}
                    </Text>
                </View>
                <Text style={styles.description}>
                    { data.description }
                </Text>
            </View>
        );
    }
// }

export default CardTraining;