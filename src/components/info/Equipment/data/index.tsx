import React, { ReactText, useState } from 'react';
import { Alert, Keyboard, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
import Toast from 'react-native-tiny-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useAccess } from '../../../../context/access';
import { PropsEquipment } from '../../../../models/Equipment';
import getRealm from '../../../../services/realm';
import stylesGb from '../../../global/styles';
import { styles } from '../../styles';

interface dataEquipmentProps {
    data: PropsEquipment;
}

const DataEquipment: React.FC<dataEquipmentProps> = ({ data }) => {
    const { user, stateLoading } = useAccess();
    const { SlideInMenu } = renderers;
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [current, setCurrent] = useState(data.current);
    const [next, setNext] = useState(data.next);
    const [weekday, setWeekday] = useState<ReactText>(data.weekday);

    async function handleUpdate() {
        const realm = await getRealm();
        const equipment: any = realm.objects('Equipment').filtered(`id = ${data.id}`)[0];

        try {
            realm.write(() => {
                equipment.name = name;
                equipment.description = description;
                equipment.current = Number(current);
                equipment.next = Number(next);
                equipment.weekday = weekday;
            });
            Toast.showSuccess('Equipamento Atualizado');
        } catch (error) {
            console.log(error);
            Toast.show('Falha ao Salvar');
        }
        stateLoading();
        setEdit(false);
        Keyboard.dismiss();
    }

    async function handleDelete() {
        const realm = await getRealm();
        const training: any = realm.objects('Equipment').filtered(`id = ${data.id}`);

        try {
            realm.write(() => {
                realm.delete(training);
            });
            Toast.showSuccess('Equipamento Deletado');
        } catch (error) {
            console.log(error);
        }
        stateLoading();
    }

    if(edit){
        return(
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
                    value={String(current)}
                    onChangeText={(text) => setCurrent(Number(text))}
                />
                <Text style={stylesGb.label}>
                    Próximo peso
                </Text>
                <TextInput
                    style={stylesGb.input}
                    placeholder="Ex: 30"
                    keyboardType="numeric"
                    value={String(next)}
                    onChangeText={(text) => setNext(Number(text))}
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
                <TouchableOpacity style={stylesGb.btnEdit} onPress={handleUpdate}>
                    <Text style={stylesGb.textAdd}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesGb.btnCancel} onPress={() => setEdit(false)}>
                    <Text style={stylesGb.textCancel}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <View style={styles.card}>
            <View style={styles.actions}>
                <Text style={styles.title}>{data.name}</Text>
                <Menu renderer={SlideInMenu}>
                    <MenuTrigger>
                        <Text>
                            <Icon2 name="more-horiz" color="#005187" size={25}/>
                        </Text>
                    </MenuTrigger>
                    <MenuOptions customStyles={{ optionsContainer: { height: 120, padding: 10 } }}>
                        <MenuOption onSelect={() => setEdit(true)}>
                            <Text style={styles.optionText}><Icon2 name="edit" color="#005187" size={20}/> Editar</Text>
                        </MenuOption>
                        <MenuOption onSelect={() => Alert.alert(
                            'Excluir Equipamento', `${user?.name}, você realmente deseja excluir o equipamento: ${data.name}?`,
                            [
                                {
                                    text: 'Cancelar',
                                    style: 'cancel'
                                },
                                {
                                    text: 'Sim',
                                    onPress: handleDelete
                                }
                            ])
                        }>
                            <Text style={styles.optionText}><Icon name="trash-can-outline" color="#005187" size={20}/> Excluir</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
            <Text style={styles.description}>{data.description}</Text>
            <View style={styles.additionals}>
                <View style={styles.additional}>
                    <Icon name="calendar" color='#003265' size={25}/>
                    <Text style={styles.detail}>{data.weekday}</Text>
                </View>
                <View style={styles.additional}>
                    <Icon name="weight-lifter" color='#003265' size={25}/>
                    <Text style={styles.detail}>{data.current}</Text>
                </View>
                <View style={styles.additional}>
                    <Icon name="weight-kilogram" color='#003265' size={25}/>
                    <Text style={styles.detail}>{data.next}</Text>
                </View>
            </View>
        </View>
    );
}

export default DataEquipment;