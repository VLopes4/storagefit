import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAccess } from '../../../context/access';
import getRealm from '../../../services/realm';
import Header from '../../global/Header';
import stylesGb from '../../global/styles';
import DataEquipment from './data';

export default function InfoEquipment(){
    const { state } = useAccess();
    const [equipments, setEquipments] = useState<any>();

    useEffect(() => {
        async function loadEquipments(){
            const realm = await getRealm();

            const response = realm.objects('Equipment');
            setEquipments(response)
        }

        loadEquipments();
    },[state]);

    return(
        <View style={stylesGb.container}>
            <Header title='Meus Equipamentos' route='Information'/>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                data={equipments}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <DataEquipment data={item}/>
                )}
            />
        </View>
    );
}