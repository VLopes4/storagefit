import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import getRealm from '../../services/realm';
import { useAccess } from '../../context/access';
import CardTraining from '../../components/home/Training';
import CardEquipment from '../../components/home/Equipment';
import Settings from '../../components/Settings';
import stylesGb from '../../components/global/styles';

export default function Home() {
    const { user, state } = useAccess();
    const [time, setTime] = useState('');
    const [welcome, setWelcome] = useState('');
    const [today] = useState(new Date().getDay());
    const [settings, setSettings] = useState(false);
    const [training, setTraining] = useState<any>([]);
    const [equipment, setEquipment] = useState<any>([]);

    let weekday = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    useEffect(() => {
        async function loadData(){
            const realm = await getRealm();

            const resTraining = realm.objects('Training').filtered(`weekday == "${weekday[today]}"`);
            setTraining(resTraining);

            const resEquipment = realm.objects('Equipment').filtered(`weekday == "${weekday[today]}"`);
            setEquipment(resEquipment);
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
        loadData();
    },[state]);

    return(
        <>
            <View style={styles.header}>
                <View style={styles.headerWelcome}>
                    { settings ? (
                        <>
                            <Icon2 onPress={() => setSettings(false)} name="long-arrow-left" color='#005187' size={30}/>
                            <Text style={[styles.welcome, { marginRight: 'auto', marginLeft: 'auto' }]}>
                                Configurações
                            </Text>
                        </>
                    ) : (
                        <>
                            <Text style={styles.welcome}>
                                {welcome}
                            </Text>
                            <Icon2 onPress={() => setSettings(true)} name="gear" color='#005187' size={30}/>
                        </>
                    )}
                </View>
            </View>
            { settings ? (
                <Settings/>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#f5faff' }}>
                    <View style={styles.headerDay}>
                        <Text style={styles.welcome}>
                            {user?.name}, vamos treinar hoje?
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
                                        style={styles.listTraining}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
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
                                <>
                                    <Text style={styles.title}>
                                        {equipment.length > 1 ? "Equipamentos de Hoje" : "Equipamento de Hoje"}
                                    </Text>
                                    <FlatList
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        keyboardShouldPersistTaps="handled"
                                        data={equipment}
                                        keyExtractor={item => String(item.id)}
                                        renderItem={({ item }) => (
                                            <CardEquipment data={item} />
                                        )}
                                    />
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            )}
        </>
    );
}