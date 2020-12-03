import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chart from '../../components/Chart';
import stylesGb from '../../components/global/styles'; 
import { styles } from './styles';

export default function Home() {

    return(
        <View style={stylesGb.container}>
            <View style={styles.cardContent}>
                <View style={styles.cardKg}>
                    <Text style={styles.cardKgTitle}>Inicial</Text>
                    <Text style={styles.cardKgNumber}>65Kg</Text>
                </View>
                <View style={styles.cardKg}>
                    <Text style={styles.cardKgTitle}>Atual</Text>
                    <Text style={styles.cardKgNumber}>71Kg</Text>
                </View>
                <View style={styles.cardKg}>
                    <Text style={styles.cardKgTitle}>Ganho</Text>
                    <Text style={styles.cardKgNumber}>6Kg</Text>
                </View>
            </View>
            <Chart/>
            <View style={styles.cardTraining}>
                <View style={styles.cardHeaderTraining}>
                    <Icon name='calendar' size={18} color='#005187'/>
                    <Text style={styles.weekDay}>Terça</Text>
                </View>
                <Text style={styles.trainingTitle}>Ombro e Perna</Text>
            </View>
        </View>
    );
}