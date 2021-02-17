import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesGb from '../../components/global/styles';
import { styles } from './styles';
import imgBook from '../../assets/images/booking.png';
import imgCook from '../../assets/images/cooking.png';
import imgFit from '../../assets/images/fitness.png';
import imgActi from '../../assets/images/activity.png';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function Information() {
    const navigation = useNavigation();
    
    return(
        <View style={stylesGb.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>
                    Minhas Informações
                </Text>
                <Text style={styles.text}>
                    Confira suas informações adicionas em cada categoria correspondente
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('InfoWeight') }}>
                    <LinearGradient style={styles.gradient} colors={['#005187', '#ffffff', '#ffffff']} start={{ x: 0, y: 0 }} end={{ x: 1.1, y: 0}}>
                        <Text style={styles.btnText}>
                            Pesos
                        </Text>
                        <Image style={styles.btnIco} source={imgFit}/>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('InfoTraining') }}>
                    <LinearGradient style={styles.gradient} colors={['#005187', '#ffffff', '#ffffff']} start={{ x: 0, y: 0 }} end={{ x: 1.1, y: 0}}>
                        <Text style={styles.btnText}>
                            Treinos
                        </Text>
                        <Image style={styles.btnIco} source={imgBook}/>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Equipment') }}>
                    <LinearGradient style={styles.gradient} colors={['#005187', '#ffffff', '#ffffff']} start={{ x: 0, y: 0 }} end={{ x: 1.1, y: 0}}>
                        <Text style={styles.btnText}>
                            Equipamentos
                        </Text>
                        <Image style={styles.btnIco} source={imgActi}/>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Menu') }}>
                    <LinearGradient style={styles.gradient} colors={['#005187', '#ffffff', '#ffffff']} start={{ x: 0, y: 0 }} end={{ x: 1.1, y: 0}}>
                        <Text style={styles.btnText}>
                            Cardápios
                        </Text>
                        <Image style={styles.btnIco} source={imgCook}/>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}