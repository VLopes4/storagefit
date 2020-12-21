import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../global/Header';
import stylesGb from '../../global/styles';
import { styles } from './styles';
import months from '../../../assets/data/months.json';

export default function Weight() {
    const [items, setItems] = useState([
        { id: 1, weight: 0, month: 1, year: 2021 }
    ]);

    function addNewItem() {
        const length = items.length;
        
        if(length < 12){
            setItems([
                ...items,
                { id: (length + 1), weight: 0, month: (length + 1), year: 2021 }
            ]);
        } else {
            Alert.alert('Aviso', 'limite de meses atingido')
        }
    }

    function removeItem() {
        let updateItem = [];

        for(var i = 1; i <  items.length; i++){
            updateItem.push(items[i])
        }

        if(updateItem !== []){
            setItems(updateItem);
        }
    }

    function setItemValue(position: number, field: string, value: string) {
        const updateItems = items.map((item, index) => {
            if(index === position) {
                return { ...item, [field]: value };
            }

            return item;
        });

        setItems(updateItems);
    }

    function handleSubmit() {
        Alert.alert('Quantidade', String(items[0].month));
    }
    
    return(
        <View style={stylesGb.container}>
            <Header name='Peso'>
                {items.length > 1 ? (
                    <View style={styles.multiIcon}>
                        <Icon onPress={removeItem} style={styles.icon} name="minus"/>
                        <Icon onPress={addNewItem} style={styles.icon} name="plus"/>
                    </View>
                ) : (
                    <Icon onPress={addNewItem} style={styles.icon} name="plus"/>
                )}
            </Header>
            <ScrollView style={stylesGb.cardInput} showsVerticalScrollIndicator={false}>
                {items.map((item, index) => {
                    return(
                        <View key={item.id} style={styles.content}>
                            <Text style={stylesGb.label}>
                                Peso
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: 60"
                                value={String(item.weight)}
                                onChangeText={(text) => setItemValue(index, 'month', text)}
                            />
                            <Text style={styles.field}>
                                Peso para o mês de {months[item.month].month}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
            <TouchableOpacity onPress={handleSubmit} style={stylesGb.btnAdd}>
                <Text style={stylesGb.textAdd}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}