import React from 'react';
import { ScrollView, ImageBackground, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import stylesGb from '../../global/styles';
import { styles } from './styles';
import imgProtein from '../../../assets/images/protein.jpg';
import imgAnimal from '../../../assets/images/animal.jpg';
import imgVegetable from '../../../assets/images/vegetable.jpg';
import imgOptions from '../../../assets/images/healthy-options.png';
import imgTraining from '../../../assets/images/training.png';
import imgBreakfast from '../../../assets/images/breakfast.png';

export default function Protein(){
    const navigation = useNavigation();

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground style={stylesGb.imgBack} source={imgProtein}>
                <View style={stylesGb.imgBackContent}>
                    <Icon onPress={() => { navigation.navigate('Food') }} style={stylesGb.imgBackIcon} name="long-arrow-left"/>
                </View>
            </ImageBackground>
            <View style={stylesGb.container}>
                <Text style={stylesGb.titleFeed}>
                    Alimentos ricos em Proteínas
                </Text>
                <Text style={stylesGb.textFeed}>
                    A proteína é uma molécula formada por aminoácidos e tem papel importante no desenvolvimento de células e tecidos, hormônios,
                    além da construção e manutenção de todos os nossos órgãos e tecidos. Estes aminoácidos são divididos em essenciais, aqueles que
                    precisamos consumir na alimentação: histidina, isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptofano e valina.
                    E os não essenciais, os produzidos pelo corpo. Os dois tipos são fundamentais para o funcionamento do organismo. Com a combinação
                    correta dos alimentos é possível conseguir níveis adequados de aminoácidos, mesmo sem o consumo de carne, como no caso dos vegetarianos
                    ou veganos. A importância é manter o equilíbrio para evitar a indisposição, baixa imunidade ou a perda de massa muscular. Vamos abordar
                    dois tipos de proteínas: animal e vegetal.
                </Text>
                <Text style={styles.subTitle}>
                    Proteína Animal
                </Text>
                <View style={styles.card}>
                    <Image style={styles.cardImg} source={imgAnimal}/>
                    <View style={styles.cardFooter}>
                        <Text style={styles.cardText}>
                            Alto valor biológico, todos os aminoácidos que o corpo precisa
                        </Text>
                    </View>
                </View>
                <Text style={styles.text}>
                    As proteínas animais são a melhor opção, pois têm principalmente uma quantidade total mais alta de proteínas e melhores perfis de aminoácidos.
                    As proteínas dos alimentos de origem animal são mais biodisponíveis que as fontes vegetais. Por esses motivos, alimentos como laticínios, ovos,
                    peixe e carne são as formas mais eficazes de se obter proteínas.
                </Text>
                <Text style={styles.subTitle}>
                    Proteína Vegetal
                </Text>
                <View style={styles.card}>
                    <Image style={styles.cardImg} source={imgVegetable}/>
                    <View style={styles.cardFooter}>
                        <Text style={styles.cardText}>
                            Menor valor biológico, alguns aminoácidos faltantes
                        </Text>
                    </View>
                </View>
                <Text style={styles.text}>
                    Veganos podem exigir 25% mais proteína por dia do que os carnívoros, porque as proteínas vegetais são mais difíceis de digerir e absorver do que as
                    proteínas animais. A proteína vegetal não se compara à proteína animal. É muito menos biodisponível e possui menos de cada aminoácido. É importante que
                    você tenha em mente que é mais desafiador obter uma quantidade suficiente de aminoácidos essenciais em uma dieta livre de proteínas animais.
                </Text>
            </View>
            <View style={[stylesGb.container, styles.backWhite]}>
                <Text style={stylesGb.titleFeed}>
                    Proteína e a perda de peso
                </Text>
                <Image style={styles.illustration} source={imgOptions}/>
                <Text style={styles.text}>
                    A proteína também tem sido associada à perda de peso, ou seja, dietas de baixa ingestão de carboidratos (low-carb) e ricas em proteínas, como a Paleo e
                    a Atkins, prometem prolongar a sensação de saciedade. Em geral, as pessoas não conseguem emagrecer porque sentem fome, e estudos mostram que um café da
                    manhã com alto teor proteico pode ajudar a diminuir a vontade de comer ao longo do dia.
                </Text>
                <Text style={stylesGb.titleFeed}>
                    Proteína e massa muscular
                </Text>
                <Image style={styles.illustration} source={imgTraining}/>
                <Text style={styles.text}>
                    A maioria das pessoas associa há muito tempo a proteína ao ganho de massa muscular – e a associação está correta. Pois, exercícios baseados na força
                    provocam a quebra de proteína no tecido muscular. E, para os músculos ficarem mais fortes, as proteínas precisam ser reconstruídas. A leucina, um tipo
                    de aminoácido, desempenha um papel particularmente importante nesse processo, desencadeando a síntese proteica. Alguns especialistas argumentam, inclusive,
                    que não consumir proteína após o exercício pode fazer com que a quebra (de proteína) do músculo seja maior do que a síntese – o que significa que não haverá
                    ganho de massa muscular.
                </Text>
                <Text style={stylesGb.titleFeed}>
                    Quantidade diária de proteína indicada
                </Text>
                <Image style={styles.illustration} source={imgBreakfast}/>
                <Text style={styles.text}>
                    O ideal é que o consumo aconteça entre todas as refeições, assim a proteína é absorvida ao longo do dia. A necessidade diária recomendada pela RDA
                    (Recommended Dietary Allowances) é de 0,8g/kg de peso corporal. Seguindo uma dieta balanceada, esta quantidade evitaria qualquer complicação causada por
                    deficiência. Uma informação importante é que o corpo não estoca excesso de proteínas ou aminoácidos. Ou seja, não adianta exagerar no consumo porque uma
                    dieta hiperproteica leva ao acúmulo de gordura e a sobrecarga renal.
                </Text>
            </View>
            <View style={stylesGb.container}>
                <Text style={styles.text}>
                    Lembre-se, sempre consulte um profissional da saúde antes de realizar qualquer mudança na sua dieta!
                </Text>
            </View>
        </ScrollView>
    );
}