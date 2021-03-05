import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import getRealm from '../../../services/realm';
import stylesGb from '../../global/styles';
import DataTraining from './data';
import Header from '../../global/Header';
import { useAccess } from '../../../context/access';

export default function InfoTraining() {
    const { state } = useAccess();
    const [trainings, setTrainings] = useState<any>([]);

    useEffect(() => {
        async function loadTraining(){
            const realm = await getRealm();

            const response = realm.objects('Training');
            setTrainings(response)
        }

        loadTraining();
    },[state]);

    return(
        <View style={stylesGb.container}>
            <Header title='Meus Treinos' route='Information'/>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                data={trainings}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <DataTraining data={item}/>
                )}
            />
        </View>
    );
}