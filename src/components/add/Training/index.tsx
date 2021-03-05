import React, { ReactText, useEffect, useState } from 'react';
import { Text, View,ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-tiny-toast';
import getRealm from '../../../services/realm';
import Header from '../../global/Header';
import stylesGb from '../../global/styles';
import { useAccess } from '../../../context/access';

export default function Training() {
    const { stateLoading } = useAccess();
    const [lengthControl, setLengthControl] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [weekday, setWeekday] = useState<ReactText>('Domingo')

    useEffect(() => {
        async function loadTraining(){
            const realm = await getRealm();

            const response = realm.objects('Training');
            setLengthControl(response.length);
        }

        loadTraining();
    },[]);

    async function saveTraining() {
            const data = {
                id: lengthControl >= 1 ? (lengthControl + 1) : 1,
                title: title,
                description: description,
                position: lengthControl >= 1 ? (lengthControl + 1) : 1,
                weekday: weekday,
                repetition: 0
            };
    
            try {
                const realm = await getRealm();
    
                realm.write(() => {
                    realm.create('Training', data)
                });
                
                setLengthControl(lengthControl + 1);
                Toast.showSuccess('Treino Adicionado')
                stateLoading();
            } catch (error) {
                console.log(error);
                Toast.show('Falha ao Adicionar');
            }

        setTitle('');
        setDescription('');
        Keyboard.dismiss();
    }

    async function handleSubmit() {
        try {
            await saveTraining()
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <View style={stylesGb.container}>
            <Header title='Adicionar Treino' route='Add'/>
            <ScrollView style={stylesGb.cardInput} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={stylesGb.label}>
                        Título
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: Ombro e Perna"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <Text style={stylesGb.label}>
                        Descrição
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: Seguir a seguinte ordem: alongamentos, elevação lateral com halter, levantamento frontal com halter seguido de agachamento e extensora"
                        multiline={true}
                        numberOfLines={4}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                    <Text style={stylesGb.label}>
                        Dia
                    </Text>
                    <View style={stylesGb.input}>
                        <Picker
                            selectedValue={weekday}
                            onValueChange={(itemValue, itemIndex) => setWeekday(itemValue)}
                        >
                            <Picker.Item label="Domingo" value="Domingo"/>
                            <Picker.Item label="Segunda" value="Segunda"/>
                            <Picker.Item label="Terça" value="Terça"/>
                            <Picker.Item label="Quarta" value="Quarta"/>
                            <Picker.Item label="Quinta" value="Quinta"/>
                            <Picker.Item label="Sexta" value="Sexta"/>
                            <Picker.Item label="Sábado" value="Sábado"/>
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