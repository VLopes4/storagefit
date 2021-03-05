import React from 'react';
import { Image, Text, View } from 'react-native';
import imgDev from '../../../assets/images/develop.png';

export default function Develop() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <Image style={{ maxHeight: 400, resizeMode: 'center' }} source={imgDev}/>
            <View style={{ bottom: 50 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#003265', fontFamily: 'Roboto'}}>
                    EM DESENVOLVIMENTO
                </Text>
                <Text style={{ fontSize: 18, textAlign: 'center', color: '#000', fontFamily: 'Roboto' }}>
                    Aguarde a próxima atualização!
                </Text>
            </View>
        </View>
    );
}