import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-tiny-toast';
import { useAccess } from '../../../context/access';
import { PropsWeight } from '../../../models/Weight';
import getRealm from '../../../services/realm';
import Chart from '../../Chart';
import Header from '../../global/Header';
import stylesGb from '../../global/styles';
import { styles } from './styles';

export default function InfoWeight() {
    const { user, state, stateLoading } = useAccess();
    const [current, setCurrent] = useState(0);
    const [pretense, setPretense] = useState(0);
    const [dataChart, setDataChart] = useState([]);

    let data: any = [];

    useEffect(() => {
        async function loadWeight(){
            const realm = await getRealm();

            const response = realm.objects<PropsWeight>('Weight');
            let index = (response.length - 1);

            for (let i = 0; i < response.length; i++) {
                let chart = { quarter: response[i].month, earnings: response[i].weight };
                data.push(chart);
            }

            setDataChart(data);

            const currentWeight = realm.objects<PropsWeight>('Weight')[index];
            if(currentWeight === undefined){
                setCurrent(0);
            } else {
                setCurrent(Number(currentWeight.weight));

                if(user?.pretense === 'Ganho'){
                    setPretense(Number(currentWeight.weight) - Number(user.startingWeight));
                } else {
                    setPretense(Number(user?.startingWeight) - Number(currentWeight.weight));
                }
            }
        }

        loadWeight();
    },[state]);

    async function handleAllDelete() {
        const realm = await getRealm();
        const weight: any = realm.objects('Weight');

        try {
            realm.write(() => {
                realm.delete(weight);
            });
            Toast.showSuccess('Histórico Deletado');
            stateLoading();
        } catch (error) {
            console.log(error);
            Toast.show('Erro ao Deletar');
        }
    }

    return(
        <View style={stylesGb.container}>
            <Header title='Meu Histórico de Pesos' route='Information'>
                <Icon style={styles.icon} name="trash-can-outline" onPress={() => Alert.alert(
                    'Deletar Histórico de Pesos', `${user?.name}, você realmente deseja deletar o seu histórico de pesos?`,
                    [
                        {
                            text: 'Cancelar',
                            style: 'cancel'
                        },
                        {
                            text: 'Sim',
                            onPress: handleAllDelete
                        }
                    ])
                }/>
            </Header>
            <View style={styles.cardContent}>
                <View style={styles.cardKg}>
                    <Text style={styles.cardKgTitle}>Inicial</Text>
                    <Text style={styles.cardKgNumber}>{user?.startingWeight}Kg</Text>
                </View>
                <View style={styles.cardKg}>
                    <Text style={styles.cardKgTitle}>Atual</Text>
                    <Text style={styles.cardKgNumber}>{current}Kg</Text>
                </View>
                <View style={styles.cardKg}>
                    <Text style={styles.cardKgTitle}>{user?.pretense}</Text>
                    <Text style={styles.cardKgNumber}>{pretense}Kg</Text>
                </View>
            </View>
            <Chart data={dataChart}/>
        </View>
    );
}