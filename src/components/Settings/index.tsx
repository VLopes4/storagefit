import React, { ReactText, useCallback, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, Linking, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { useAccess } from '../../context/access';
import { styles } from '../../pages/Home/styles';
import Toast from 'react-native-tiny-toast';

export default function Settings(){
    const { user, update, stateLoading } = useAccess();
    const [disabled, setDisabled] = useState(false)
    const [name, setName] = useState(user?.name ? String(user.name) : '');
    const [weight, setWeight] = useState(user?.startingWeight ? String(user.startingWeight) : '')
    const [pretense, setPretense] = useState<ReactText>(user?.pretense ? String(user.pretense) : 'Ganho');

    const handleLinking = useCallback(async (link: string) => {
        await Linking.openURL(link)
    },[]);

    async function handleSubmit() {
        if(name === '' || weight === '' || pretense === ''){
           return Alert.alert('Informações Incompletas', 'Preencha todos os campos corretamente antes de continuar');
        }

        await update(name, Number(weight), String(pretense));
        stateLoading();
        Toast.showSuccess('Informações Atualizadas');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#f5faff' }}>
            <View style={styles.container}>
                <View style={styles.items}>
                    <Text style={styles.title}>
                        Informações Principais
                    </Text>
                    <Icon onPress={() => setDisabled(!disabled)} style={{textAlign: 'center', marginTop: 25 }} name='account-edit' color='#005187' size={35}/>
                </View>
                <Text style={styles.label}>
                    Nome
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o seu nome'
                    editable={disabled}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.label}>
                    Peso
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o seu peso atual'
                    editable={disabled}
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                    keyboardType="numeric"
                />
                <Text style={styles.label}>
                    Pretensão
                </Text>
                <View style={styles.input}>
                    <Picker
                        enabled={disabled}
                        selectedValue={pretense}
                        onValueChange={(itemValue, itemIndex) => setPretense(itemValue)}
                    >
                        <Picker.Item color={disabled ? '#000000' : '#999999'} label="Ganhar Peso" value="Ganho"/>
                        <Picker.Item color={disabled ? '#000000' : '#999999'} label="Perde Peso" value="Perda"/>
                    </Picker>
                </View>
                {disabled && (
                    <TouchableOpacity onPress={handleSubmit} style={styles.btnContinue}>
                        <Text style={styles.btnTextContinue}>EDITAR</Text>
                    </TouchableOpacity>
                )}
                <Text style={styles.title}>
                    Créditos e Fontes
                </Text>
                <Text style={styles.text}>
                    Todas as informações transmitidas na parte (aba) de alimentação foram pesquisadas com cautela, essas informações foram retiradas do
                    <Text onPress={() => handleLinking('https://google.com')} style={styles.textEmphasis}> Portal Nacional de Saúde - Unimed</Text>. Para garantir a confiabilidade
                    essas informações foram revisadas pela profissional de nutrição <Text onPress={() => handleLinking('https://www.instagram.com/nutrigipreti/')} style={styles.textEmphasis}>Giovanna Preti</Text>.
                </Text>
                <Text style={styles.textDev}>
                    Esse é um aplicativo da <Text onPress={() => handleLinking('https://www.saddevelopment.com/')} style={styles.textEmphasis}>Sad Development</Text>,
                    desenvolvido por <Text onPress={() => handleLinking('https://www.instagram.com/dev_lopes/')} style={styles.textEmphasis}>Vinicius Lopes</Text>.
                </Text>
            </View>
        </ScrollView>
    );
}