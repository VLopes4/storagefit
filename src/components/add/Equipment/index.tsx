import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylesGb from '../../global/styles';
import { styles } from './styles';
import Header from '../../global/Header';

export default function Equipment() {
    const [items, setItems] = useState([
        { id: 1, name: '', description: '', actual: '', next: '' }
    ]);

    function addNewItem() {
        setItems([
            ...items,
            { id: (items.length + 1), name: '', description: '', actual: '', next: '' }
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
            <Header name='Equipamento'>
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
                                Nome
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: Banco de supino"
                                value={String(item.name)}
                                onChangeText={(text) => setItemValue(index, 'name', text)}
                            />
                            <Text style={stylesGb.label}>
                                Descrição
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: Exercício de levantamento de peso que trabalha o peitoral"
                                multiline={true}
                                numberOfLines={2}
                                value={item.description}
                                onChangeText={(text) => setItemValue(index, 'description', text)}
                            />
                            <Text style={stylesGb.label}>
                                Peso atual
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: 20"
                                value={String(item.actual)}
                                onChangeText={(text) => setItemValue(index, 'actual', text)}
                            />
                            <Text style={stylesGb.label}>
                                Próximo peso
                            </Text>
                            <TextInput
                                style={stylesGb.input}
                                placeholder="Ex: 30"
                                value={String(item.actual)}
                                onChangeText={(text) => setItemValue(index, 'next', text)}
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