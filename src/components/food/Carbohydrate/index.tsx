import React from 'react';
import { ImageBackground, ScrollView, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import stylesGb from '../../global/styles';
import { styles } from './styles';
import imgCarbohydrate from '../../../assets/images/carbohydrate.png';
import imgCarbs from '../../../assets/images/carbs.jpg';
import imgDiet from '../../../assets/images/diet.png';
import imgPersonal from '../../../assets/images/personal.png';

export default function Carbohydrate(){
    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground style={stylesGb.imgBack} source={imgCarbohydrate}>
                <View style={stylesGb.imgBackContent}>
                    <Icon onPress={() => { navigation.navigate('Food') }} style={stylesGb.imgBackIcon} name="long-arrow-left"/>
                </View>
            </ImageBackground>
            <View style={stylesGb.container}>
                <Text style={stylesGb.titleFeed}>
                    Alimentos ricos em Carboidratos
                </Text>
                <Text style={stylesGb.textFeed}>
                    Os carboidratos são importantes substratos energéticos para a contração muscular durante o exercício,  principalmente no exercício
                    prolongado realizado sob intensidade moderada e em exercícios de alta intensidade e curta duração. Eles são moléculas orgânicas compostas
                    por carbono, oxigênio e hidrogênio. Além da denominação popular, eles também podem ser chamados de açúcares, glicídios ou hidratos de carbono.
                    Quando são ingeridos e absorvidos pelo organismo, têm o papel de liberar glicose, fornecer energia para as células e realizar a manutenção metabólica
                    glicêmica, o que permite que o nosso corpo siga desempenhando suas funções. Os carboidratos podem ser divididos em duas categorias: simples e complexos
                </Text>
                <Image style={styles.imageCarbs} source={imgCarbs}/>
                <Text style={styles.subTitle}>
                    Carboidratos simples
                </Text>
                <Text style={styles.text}>
                    São aqueles encontrados em alimentos refinados como doces, refrigerantes e pães brancos, mas também podem ser consumidos de fontes saudáveis,
                    incluindo frutas como a banana e tubérculos como a batata inglesa.
                </Text>
                <Text style={styles.subTitle}>
                    Carboidratos Complexos
                </Text>
                <Text style={styles.text}>
                    Possuem fibras que ajudam a controlar a glicose e o organismo não o absorve imediatamente. Frutas em geral, batata doce, quinoa e outros
                    cereais integrais são exemplos.
                </Text>
            </View>
            <View style={[stylesGb.container, styles.backWhite]}>
                <Text style={stylesGb.titleFeed}>
                    dieta do atleta
                </Text>
                <Image style={styles.illustration} source={imgDiet}/>
                <Text style={styles.text}>
                    A fadiga que ocorre em exercícios físicos prolongados e de alta intensidade está associada, em boa parte, com baixos estoques e depleção de
                    glicogênio, hipoglicemia e desidratação. Segundo a Sociedade Brasileira de Medicina do Esporte os atletas amadores ou profissionais, dependendo
                    da fase de treinamento e modalidade esportiva, podem chegar até 70% do conteúdo total da dieta na forma de carboidratos. Para acelerar a recuperação
                    muscular recomenda-se o consumo de carboidratos entre 5g e 8g/kg de peso/dia. Em atividades de longa duração e/ou treinos intensos há necessidade
                    de até 10g/kg de peso/dia para a adequada recuperação do glicogênio muscular e/ou aumento da massa muscular. A quantidade de carboidrato ingerida
                    dependerá da duração do exercício. Durante provas longas, como a meia maratona e a maratona, os atletas devem consumir aproximadamente entre 7g e
                    8g/kg de peso ou de 30g a 60g de carboidrato para cada hora de exercício. O objetivo é evitar a hipoglicemia, depleção de glicogênio e retardar a
                    fadiga. Uma forma de repor ou conseguir carboidratos de rápida absorção durante o exercício aeróbico de longa duração ou de alta intensidade é através
                    da utilização de bebidas esportivas, géis ou jujubas de carboidratos. Eles podem ser consumidas antes, durante e/ou após o exercício, dependendo do
                    tipo e do tempo da atividade praticada.
                </Text>
                <Text style={stylesGb.titleFeed}>
                    Essenciais para os exercícios
                </Text>
                <Image style={styles.illustration} source={imgPersonal}/>
                <Text style={styles.text}>
                    Por serem os grandes responsáveis por fornecer energia para as atividades cotidianas, os carboidratos, quando consumidos de forma correta, previnem
                    o uso da proteína muscular e melhoram o desempenho do atleta durante a prática de exercício. Em condições fisiológicas, durante o exercício físico
                    ocorre uma supressão da produção de insulina pelas células pancreáticas, levando a maior produção de glucagon, que por sua vez estimula vias metabólicas
                    relacionadas à maior disponibilidade de glicose para oxidação durante a prática de exercício. Ou seja, é necessário avaliar a intensidade do exercício para
                    ajustar as quantidades necessárias de carboidrato de acordo com a demanda de cada indivíduo: quanto mais intenso, maior utilização de glicose para produção
                    de energia Por isso, é importante ter um acompanhamento nutricional com um especialista para adaptar a quantidade de ingestão de carboidratos necessária para
                    suprir as necessidades energéticas de acordo com a frequência, intensidade e tipo de exercício físico que cada pessoa pratica. Pode ser necessário inclusive o
                    consumo de carboidratos simples.
                </Text>
            </View>
        </ScrollView>
    );
}