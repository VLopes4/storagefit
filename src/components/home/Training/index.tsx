import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PropsTraining } from '../../../models/Training';
import getRealm from '../../../services/realm';
import { styles } from './styles';

interface dataTrainingProps {
    data: PropsTraining
}

const CardTraining: React.FC<dataTrainingProps> = ({ data }) => {
    // const [concluded, setConcluded] = useState(false);

    // async function handleConcluded(){
    //     let count = (data.position + 1)
    //     setConcluded(true);
    //     try {
    //         const realm = await getRealm();
    //         console.log(count)
    //         realm.write(() => {
    //             realm.create('Training', { id: data.id, repetition: count },);
    //         });
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // if(concluded){
    //     return(
    //         <View key={data.id}>
    //             <View style={styles.cardHeaderTraining}>
    //                 <Text style={styles.title}>
    //                     {data.title}
    //                 </Text>
    //             </View>
    //             <Text style={styles.description}>
    //                 { data.description }
    //             </Text>
    //         </View>
    //     );
    // } else {
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
                {/* <TouchableOpacity style={styles.btnConcluded} onPress={handleConcluded}>
                    <Text style={styles.textConcluded}>Concluído</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
// }

export default CardTraining;