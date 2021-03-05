import React, { ReactText, useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-tiny-toast';
import { useAccess } from '../../../context/access';
import getRealm from '../../../services/realm';
import Header from '../../global/Header';
import stylesGb from '../../global/styles';
import { styles } from './styles';

export default function Equipment() {
    const { stateLoading } = useAccess();
    const [lengthControl, setLengthControl] = useState(0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [current, setCurrent] = useState('');
    const [next, setNext] = useState('');
    const [weekday, setWeekday] = useState<ReactText>('Domingo');

    useEffect(() => {
        async function loadEquipment(){
            const realm = await getRealm();

            const response = realm.objects('Equipment');
            setLengthControl(response.length);
        }

        loadEquipment();
    },[]);

    async function saveEquipment() {
            const data = {
                id: lengthControl >= 1 ? (lengthControl + 1) : 1,
                name: name,
                description: description,
                current: Number(current),
                next: Number(next),
                weekday: weekday
            };
    
            try {
                const realm = await getRealm();
    
                realm.write(() => {
                    realm.create('Equipment', data)
                });
                
                setLengthControl(lengthControl + 1);
                Toast.showSuccess('Equipamento Adicionado')
                stateLoading();
            } catch (error) {
                console.log(error);
                Toast.show('Falha ao Adicionar');
            }

        setName('');
        setDescription('');
        setCurrent('');
        setNext('');
        setWeekday('Domingo');
        Keyboard.dismiss();
    }

    async function handleSubmit() {
        try {
            await saveEquipment();
        } catch (err) {
            console.log(err)
        }
    }


    return(
        <View style={stylesGb.container}>
            <Header title='Adicionar Equipamento' route='Add'/>
            <ScrollView style={stylesGb.cardInput} showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={stylesGb.label}>
                        Nome
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: Banco de supino"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={stylesGb.label}>
                        Descrição
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: Exercício de levantamento de peso que trabalha o peitoral"
                        multiline={true}
                        numberOfLines={2}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                    <Text style={stylesGb.label}>
                        Peso atual
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: 20"
                        keyboardType="numeric"
                        value={current}
                        onChangeText={(text) => setCurrent(text)}
                    />
                    <Text style={stylesGb.label}>
                        Próximo peso
                    </Text>
                    <TextInput
                        style={stylesGb.input}
                        placeholder="Ex: 30"
                        keyboardType="numeric"
                        value={next}
                        onChangeText={(text) => setNext(text)}
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