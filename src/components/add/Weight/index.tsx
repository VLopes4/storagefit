import React, { ReactText, useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-tiny-toast';
import getRealm from '../../../services/realm';
import Header from '../../global/Header';
import stylesGb from '../../global/styles';
import { useAccess } from '../../../context/access';

export default function Weight() {
    const { stateLoading } = useAccess();
    const [lengthControl, setLengthControl] = useState(0);
    const [weight, setWeight] = useState('');
    const [month, setMonth] = useState<ReactText>('jan');

    useEffect(() => {
        async function loadWeight(){
            const realm = await getRealm();

            const response = realm.objects('Weight');
            setLengthControl(response.length);
        }

        loadWeight();
    },[]);

    async function saveWeight() {
        const data = {
            id: lengthControl >= 1 ? (lengthControl + 1) : 1,
            weight: Number(weight),
            month: month,
        };

        try {
            const realm = await getRealm();

            realm.write(() => {
                realm.create('Weight', data)
            });

            stateLoading();
            setLengthControl(lengthControl + 1);
            Toast.showSuccess('Peso Adicionado');
        } catch (error) {
            console.log(error);
            Toast.show('Erro ao Adicionar Peso');
        }

        setWeight('');
        setMonth('');
        Keyboard.dismiss();
    }

    async function handleSubmit() {
        try {
            await saveWeight()
        } catch (err) {
            console.log(err)
        }   
    }
    
    return(
        <View style={stylesGb.container}>
            <Header title='Adicionar Peso' route='Add'/>
            <ScrollView style={stylesGb.cardInput} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={stylesGb.label}>
                        Peso
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: 60"
                        value={weight}
                        onChangeText={(text) => setWeight(text)}
                        keyboardType="numeric"
                    />
                    <Text style={stylesGb.label}>
                        Mês
                    </Text>
                    <View style={stylesGb.input}>
                        <Picker
                            selectedValue={month}
                            onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
                        >
                            <Picker.Item label="Janeiro" value="jan"/>
                            <Picker.Item label="Fevereiro" value="fev"/>
                            <Picker.Item label="Março" value="mar"/>
                            <Picker.Item label="Abril" value="abr"/>
                            <Picker.Item label="Maio" value="mai"/>
                            <Picker.Item label="Junho" value="jun"/>
                            <Picker.Item label="Julho" value="jul"/>
                            <Picker.Item label="Agosto" value="ago"/>
                            <Picker.Item label="Setembro" value="set"/>
                            <Picker.Item label="Outubro" value="out"/>
                            <Picker.Item label="Novembro" value="nov"/>
                            <Picker.Item label="Dezembro" value="dez"/>
                        </Picker>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleSubmit} style={stylesGb.btnAdd}>
                <Text style={stylesGb.textAdd}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}