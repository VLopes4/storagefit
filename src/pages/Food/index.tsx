import React from 'react';
import { View, TouchableOpacity, Text, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesGb from '../../components/global/styles';
import imgFiber from '../../assets/images/fiber.jpg';
import imgProtein from '../../assets/images/protein.jpg';
import imgCarbohydrate from '../../assets/images/carbohydrate.png';
import { styles } from './styles';

export default function Food() {
    const navigation = useNavigation();

    return(
        <View style={stylesGb.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>
                    Alimentação
                </Text>
                <Text style={styles.text}>
                    Tudo começa na alimentação, ela é o processo pelo qual os organismos obtêm e assimilam alimentos ou nutrientes
                    para as suas funções vitais, incluindo o crescimento, movimento, reprodução e manutenção da temperatura do corpo.
                    Se alimentar de uma forma saudável e equilibrada é essencial para garantir qualidade de vida.
                    Isso porque, além de fornecer energia e bem-estar geral, através de uma boa alimentação é
                    possível prevenir e combater doenças, manter o peso corporal saudável e ter um bom desenvolvimento físico.
                </Text>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.navigate('Fiber') }}>
                    <ImageBackground style={styles.backgroundImg} source={imgFiber}>
                        <View style={styles.footer}>
                            <Text style={styles.titleImg}>
                                Alimentos ricos em Fibras
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.navigate('Protein') }}>
                    <ImageBackground style={styles.backgroundImg} source={imgProtein}>
                        <View style={styles.footer}>
                            <Text style={styles.titleImg}>
                                Alimentos ricos em Proteínas
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.navigate('Carbohydrate') }}>
                    <ImageBackground style={styles.backgroundImg} source={imgCarbohydrate}>
                        <View style={styles.footer}>
                            <Text style={styles.titleImg}>
                                Alimentos ricos em Carboidratos
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}