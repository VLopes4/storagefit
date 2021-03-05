import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    subTitle: {
        fontSize: 20,
        color: '#005187',
        textTransform: 'uppercase',
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Roboto'
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'justify'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#005187',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    cardImg: {
        width: 390,
        height: 245,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 8
    },
    cardFooter: {
        padding: 10,
        maxWidth: 390,
        backgroundColor: '#005187',
    },
    cardText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Roboto'
    },
    backWhite: {
        backgroundColor: '#fff'
    },
    illustration: {
        width: 300,
        height: 200
    }
});