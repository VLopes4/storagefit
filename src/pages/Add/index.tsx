import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesGb from '../../components/global/styles';
import { styles } from './styles';
import imgBook from '../../assets/images/booking.png';
import imgCook from '../../assets/images/cooking.png';
import imgFit from '../../assets/images/fitness.png';
import imgActi from '../../assets/images/activity.png';

export default function Add() {
    const navigation = useNavigation();
    
    return(
        <View style={stylesGb.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Weight') }}>
                    <Image style={styles.btnIco} source={imgFit}/>
                    <Text style={styles.btnText}>
                        Peso
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Training') }}>
                    <Image style={styles.btnIco} source={imgBook}/>
                    <Text style={styles.btnText}>
                        Treino
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Equipment') }}>
                    <Image style={styles.btnIco} source={imgActi}/>
                    <Text style={styles.btnText}>
                        Equipamento
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Menu') }}>
                    <Image style={styles.btnIco} source={imgCook}/>
                    <Text style={styles.btnText}>
                        Cardápio
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}