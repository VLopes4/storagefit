import React, { useEffect, useState } from 'react';
import { Text, View,ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../global/Header';
import { styles } from '../../global/Header/styles';
import stylesGb from '../../global/styles';

export default function Training() {
    const [items, setItems] = useState([
        { id: 1, title: '', description: '' }
    ]);

    function addNewItem() {
        setItems([
            ...items,
            { id: (items.length + 1), title: '', description: '' }
        ]);
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
        
    }

    return(
        <View style={stylesGb.container}>
            <Header name='Treino'>
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
                        <View key={item.id}>
                            <Text style={stylesGb.label}>
                                Título
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: Ombro e Perna"
                                value={item.title}
                                onChangeText={(text) => setItemValue(index, 'title', text)}
                            />
                            <Text style={stylesGb.label}>
                                Descrição
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: Seguir a seguinte ordem: alongamentos, elevação lateral com halter, levantamento frontal com halter seguido de agachamento e extensora"
                                multiline={true}
                                numberOfLines={4}
                                value={item.description}
                                onChangeText={(text) => setItemValue(index, 'description', text)}
                            />
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