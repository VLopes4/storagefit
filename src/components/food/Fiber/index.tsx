import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import stylesGb from '../../global/styles';
import { styles } from './styles';
import imgFiber from '../../../assets/images/fiber.jpg';
import imgFruit from '../../../assets/images/fruit.png';
import imgCereal from '../../../assets/images/cereal.png';
import imgMan from '../../../assets/images/man-balance.png'; 
import imgGirls from '../../../assets/images/girls-eating.png';

export default function Fiber(){
    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground style={stylesGb.imgBack} source={imgFiber}>
                <View style={stylesGb.imgBackContent}>
                    <Icon onPress={() => { navigation.navigate('Food') }} style={stylesGb.imgBackIcon} name="long-arrow-left"/>
                </View>
            </ImageBackground>
            <View style={stylesGb.container}>
                <Text style={stylesGb.titleFeed}>
                    Alimentos ricos em Fibras
                </Text>
                <Text style={stylesGb.textFeed}>
                    Entenda por que as fibras são essenciais para o bom funcionamento do organismo e conheça alimentos que podem te ajudar
                    a garantir a quantidade ideal desse nutriente. As fibras fazem bem ao organismo, em especial ao funcionamento do intestino.
                    De origem vegetal, as fibras contribuem para a prevenção de doenças cardiovasculares, diabetes, ajudam no controle do colesterol
                    e triglicérides (gordura no sangue) e até dão aquela força no emagrecimento, pois ajudam a manter a saciedade por mais tempo.
                    As fibras possuem dois tipos: solúveis e insolúveis.
                </Text>
                <Text style={styles.subTitle}>
                    fibras solúveis
                </Text>
                <Image source={imgFruit}/>
                <Text style={styles.text}>
                    As fibras solúveis formam um gel depois de consumidas e permanecem mais tempo no estômago, promovendo assim uma maior saciedade,
                    sendo eficiente na eliminação do excesso de gordura no sangue e aliada no controle de diabetes, segundo a Associação Nacional de
                    Atenção ao Diabetes (Anad). São boas fontes dessas fibras, aveia, morango e frutas com casca como a maçã, a pera e o pêssego, além
                    das leguminosas secas, como o feijão, a ervilha, a lentilha e o grão-de-bico.
                </Text>
                <Text style={styles.subTitle}>
                    fibras insolúveis
                </Text>
                <Image source={imgCereal}/>
                <Text style={styles.text}>
                    As fibras insolúveis, por sua vez, garantem uma textura mais firme a alguns alimentos. Logo, os grãos inteiros e os cereais integrais
                    são fontes desse tipo de fibras. Mas elas também são encontradas em verduras, em especial as de folhas verde-escuras como espinafre,
                    couve e escarola. Sua ação é ajudar o intestino a funcionar melhor, retendo mais água.
                </Text>
            </View>
            <View style={[stylesGb.container, styles.backGreen]}>
                <Text style={styles.titleGreen}>
                    Consumo equilibrado
                </Text>
                <Text style={styles.text}>
                    Entidades como o Ministério da Saúde e a Food and Drug Administration (FDA), órgão norte-americano de controle de alimentos e medicamentos,
                    recomendam que o consumo ideal de fibras deve ser entre 25 e 30 gramas por dia. Mas é preciso que este consumo seja gradativo, para que o
                    sistema digestivo se acostume a essa ingestão. Especialistas ainda orientam que consumir muita fibra (mais de 70 gramas), principalmente em
                    um curto espaço de tempo, não é recomendado, pois o excesso pode causar efeitos adversos como inchaço, gases e cólicas, e interferir na absorção
                    de outros nutrientes. Uma alimentação equilibrada é sempre o caminho e, especialmente no caso das fibras, o consumo adequado de água também contribui
                    para potencializar os benefícios ao organismo.
                </Text>
                <Image source={imgMan}/>
                <Text style={styles.titleGreen}>
                    Mais frutas e vegetais no prato
                </Text>
                <Text style={styles.text}>
                    Os nutricionistas são unânimes em dizer que as frutas e os vegetais devem estar na base da dieta por fazerem parte do grupo de alimentos que
                    fornece uma quantidade variada de fibras, vitaminas e minerais, que são nutrientes importantes para o adequado funcionamento do metabolismo.
                    As vitaminas e os minerais desses alimentos ricos em fibras contribuem para manutenção da imunidade, aumentam a disposição e a concentração
                    no trabalho, além de regularem hormônios e participarem de diversas reações químicas do nosso organismo.
                </Text>
            </View>
            <View style={[stylesGb.container, styles.backOrange]}>
                <Image source={imgGirls}/>
                <Text style={styles.titleOrange}>
                    Alimentos fonte de fibras
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.textOrange}>Frutas:</Text> abacate, abacaxi, ameixa fresca, ameixa seca, amora, banana, caju, cereja fresca, coco ralado ou fresco, damasco seco,
                    figo fresco ou seco, goiaba, kiwi, laranja com bagaço, maçã, pêssego e pera com casca, manga, maracujá, mamão, melancia, melão, tangerina,
                    morango, nectarina, tâmara, uva fresca e passa.
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.textOrange}>Vegetais:</Text> agrião, alface, abóbora, aipo, aspargo, beterraba, brócolis, couve, acelga, batata-doce, rúcula, escarola, erva-doce,
                    espinafre, repolho, salsa, cebolinha, cebola, cenoura crua, couve-flor, milho verde, nabo, pepino, pimentão, quiabo, rabanete, tomate, vagem.
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.textOrange}>Leguminosas:</Text> feijão branco, feijão preto, carioca, além de ervilha, lentilha, grão-de-bico, quinoa e soja em grãos.
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.textOrange}>Grãos, farelos e farinhas integrais:</Text> arroz, linhaça, aveia, cevada, milho e trigo, além dos cereais matinais, pães e biscoitos
                    integrais (trigo, centeio e milho).
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.textOrange}>Sementes:</Text> linhaça, chia, gergelim, mostarda, girassol, quinoa e abóbora.
                </Text>
            </View>
            <View style={stylesGb.container}>
                <Text style={styles.subTitle}>
                    Como incluir mais fibras no dia a dia
                </Text>
                <Text style={styles.text}>
                    Coma pelo menos três frutas ricas em fibras ao longo do dia nas suas refeições, aumente o consumo de folhas, saladas e legumes crus no almoço e no jantar, troque o pão,
                    o biscoito e o arroz branco pela versão integral, coma um tipo de leguminosa (feijão, grão-de-bico, lentilha, ervilha), em pelo menos uma refeição, adicione farelo de aveia,
                    linhaça, quinoa, gérmen de trigo e ou granola em preparações de frutas, vitaminas e iogurtes e Consuma duas ou três oleaginosas (castanhas, amêndoas e nozes)
                </Text>
                <Text style={styles.text}>
                    Lembre-se, sempre consulte um profissional da saúde antes de realizar qualquer mudança na sua dieta!
                </Text>
            </View>
        </ScrollView>
    );
}