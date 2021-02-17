import React, { ReactText, useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Onboarding from 'react-native-onboarding-swiper';
import { useAccess } from '../../context/access';
import { styles } from './styles';
import imgData from '../../assets/images/data.png';
import imgPersonal from '../../assets/images/personal.png';
import imgActivity from '../../assets/images/activity.png';
import imgFitness from '../../assets/images/fitness.png';
import imgOptions from '../../assets/images/healthy-options.png'

export default function Onboard(){
    const { collect } = useAccess();
    const [screen, setScreen] = useState(0);
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('')
    const [pretense, setPretense] = useState<ReactText>('Ganho');

    function handleVerify() {
        if(name === '' || weight === '' || pretense === ''){
           return Alert.alert('Informações Incompletas', 'Preencha todos os campos corretamente antes de continuar');
        }

        setScreen(2);
    }

    async function handleDone() {
        try {
            await collect(name, Number(weight), String(pretense));
        } catch (error) {
            console.log(error)
        }
    }

    if(screen === 2){
        return(
            <Onboarding
                onDone={handleDone}
                onSkip={() => Alert.alert(
                    'Pular Apresentação', 'Você realmente deseja pular a apresentação?',
                    [
                        {
                            text: 'Cancelar',
                            style: 'cancel'
                        },
                        {
                            text: 'Sim',
                            onPress: handleDone
                        }
                    ]
                )}
                pages={[
                    {
                        title: 'Storagefit',
                        subtitle: 'Uma solução para mostrar os resultados alcançados. Assim a sua dieta será eficaz e controlada',
                        backgroundColor: '#fff',
                        image: <Image style={styles.img} source={imgData}/>
                    },
                    {
                        title: 'Treino',
                        subtitle: 'Crie sua lista de treinos e controle o seu treino pessoal de acordo com os dias da semana',
                        backgroundColor: '#fff',
                        image: <Image style={styles.img} source={imgPersonal}/>
                    },
                    {
                        title: 'Equipamento',
                        subtitle: 'Crie sua lista de equipamentos com os dias de cada treino e controle o seu treino pessoal com os equipamentos devidos',
                        backgroundColor: '#fff',
                        image: <Image style={styles.img} source={imgActivity}/>
                    },
                    {
                        title: 'Peso',
                        subtitle: 'O mais importante são os resultados, controle os seus resultados todo mês através do seu peso',
                        backgroundColor: '#fff',
                        image: <Image style={styles.img} source={imgFitness}/>
                    },
                    {
                        title: 'Alimentação',
                        subtitle: 'O resultado só aparece com uma alimentação adequada, controle os seus resultados com uma boa alimentação diária e com o profissional certo',
                        backgroundColor: '#fff',
                        image: <Image style={styles.img} source={imgOptions}/>
                    }
                ]}
            />
        );
    }

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={imgData}/>
            <Text style={styles.title}>
                {screen === 0 ? 'Bem-vindo a Storagefit' : 'Storagefit'}
            </Text>
            {screen === 0 ? (
                <>
                    <Text style={styles.description}>
                        Antes de continuar vamos coletar alguns dados para ajustarmos
                        as coisas para você, tudo bem?
                    </Text>
                    <TouchableOpacity onPress={() => setScreen(1)} style={styles.btnContinue}>
                        <Text style={styles.btnTextContinue}>CONTINUAR</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text style={styles.label}>
                        Nome
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite o seu nome'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.label}>
                        Peso
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite o seu peso atual'
                        value={weight}
                        onChangeText={(text) => setWeight(text)}
                        keyboardType="numeric"
                    />
                    <Text style={styles.label}>
                        Pretensão
                    </Text>
                    <View style={styles.input}>
                        <Picker
                            selectedValue={pretense}
                            onValueChange={(itemValue, itemIndex) => setPretense(itemValue)}
                        >
                            <Picker.Item label="Ganhar Peso" value="Ganho"/>
                            <Picker.Item label="Perde Peso" value="Perda"/>
                        </Picker>
                    </View>
                    <TouchableOpacity onPress={handleVerify} style={styles.btnContinue}>
                        <Text style={styles.btnTextContinue}>CONTINUAR</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}