import React, { ReactText, useState } from 'react';
import { Alert, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-tiny-toast';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';
import { PropsTraining } from '../../../../models/Training';
import { useAccess } from '../../../../context/access';
import getRealm from '../../../../services/realm';
import { styles } from '../../styles';
import stylesGb from '../../../global/styles';

interface dataTrainingProps {
    data: PropsTraining
}

const DataTraining: React.FC<dataTrainingProps> = ({ data }) => {
    const { SlideInMenu } = renderers;
    const { user, stateLoading } = useAccess();
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [weekday, setWeekday] = useState<ReactText>(data.weekday);

    async function handleUpdate() {
        const realm = await getRealm();
        const training: any = realm.objects('Training').filtered(`id = ${data.id}`)[0];

        try {
            realm.write(() => {
                training.title = title;
                training.weekday = weekday;
                training.description = description;
            });
            Toast.showSuccess('Treino Atualizado');
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
        const training: any = realm.objects('Training').filtered(`id = ${data.id}`);

        try {
            realm.write(() => {
                realm.delete(training);
            });
            Toast.showSuccess('Treino Deletado');
        } catch (error) {
            console.log(error);
        }
        stateLoading();
    }

    if(edit){
        return(
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
        <View style={styles.card} key={data.id}>
            <View style={styles.actions}>
                <Text style={styles.title}>{data.title}</Text>
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
                            'Excluir Treino', `${user?.name}, você realmente deseja excluir o treino: ${data.title}?`,
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
                    <Icon name="repeat" color='#003265' size={25}/>
                    <Text style={styles.detail}>{data.repetition}</Text>
                </View>
            </View>
        </View>
    );
}

export default DataTraining;