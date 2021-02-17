import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getRealm from '../../services/realm';
import CardTraining from '../../components/home/Training';
import stylesGb from '../../components/global/styles';
import { useAccess } from '../../context/access';

export default function Home() {
    const { user, state } = useAccess();
    const [time, setTime] = useState('');
    const [welcome, setWelcome] = useState('');
    const [training, setTraining] = useState<any>([]);
    const [equipment, setEquipment] = useState<any>([]);
    const [today, setToday] = useState(new Date().getDay());

    let weekday = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    useEffect(() => {
        async function loadTraining(){
            const realm = await getRealm();

            const response = realm.objects('Training').filtered(`weekday == "${weekday[today]}"`);
            setTraining(response)
        }

        function loadTime() {
            const now = new Date()
            setTime(format(now, "PPPP", { locale: ptBR }))

            if(now.getHours() > 4 && now.getHours() < 12){
                setWelcome('Bom dia');
            } else if(now.getHours() > 11 && now.getHours() < 18){
                setWelcome('Boa tarde');
            } else {
                setWelcome('Boa noite');
            }
        }

        loadTime();
        loadTraining();
    },[state]);

    return(
        <>
            <View style={styles.header}>
                <Text style={styles.welcome}>
                    {welcome} {user?.name}, vamos treinar?
                </Text>
                <Text style={styles.time}>
                    {time}
                </Text>
            </View>
            <View style={stylesGb.container}>
                <View style={styles.content}>
                    {training.length === 0 ? (
                        <View>
                            <Text style={styles.training}>
                                Adicione treinos para { weekday[today].toLowerCase() } e eles
                                irão aparecer aqui toda { weekday[today].toLowerCase() }
                            </Text>
                            <Icon style={{textAlign: 'center'}} name='weight-lifter' color='#005187' size={100}/>
                        </View>
                    ) : (
                        <>
                            <Text style={styles.title}>
                                {training.length > 1 ? "Treinos de Hoje" : "Treino de Hoje"}
                            </Text>
                            <FlatList
                                style={styles.card}
                                keyboardShouldPersistTaps="handled"
                                data={training}
                                keyExtractor={item => String(item.id)}
                                renderItem={({ item }) => (
                                    <CardTraining data={item}/>
                                )}
                            />
                        </>
                    )}
                    {equipment.length === 0 ? (
                        <View>
                            <Text style={styles.training}>
                                Adicione equipamento para o seu treino de { weekday[today].toLowerCase() } e eles
                                irão aparecer aqui toda { weekday[today].toLowerCase() }
                            </Text>
                            <Icon style={{textAlign: 'center'}} name='weight-kilogram' color='#005187' size={100}/>
                        </View>
                    ) : (
                        <Text style={styles.title}>
                            Equipamentos de Hoje
                        </Text>
                    )}
                </View>
            </View>
        </>
    );
}