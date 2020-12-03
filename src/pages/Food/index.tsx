import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import stylesGb from '../../components/global/styles';
import imgProtein from '../../assets/images/protein.jpg';
import imgCarbohydrate from '../../assets/images/carbohydrate.png';
import { styles } from './styles';

export default function Food() {
    return(
        <View style={stylesGb.container}>
            <ScrollView>
                <ImageBackground style={styles.backgroundImg} source={imgProtein}>
                    <View style={styles.footer}>
                        <Text style={styles.title}>
                            Alimentos ricos em Proteínas
                        </Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={styles.backgroundImg} source={imgCarbohydrate}>
                    <View style={styles.footer}>
                        <Text style={styles.title}>
                            Alimentos ricos em Carboidratos
                        </Text>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}