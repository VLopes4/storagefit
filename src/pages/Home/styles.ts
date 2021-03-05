import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
    },
    headerWelcome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    headerDay: {
        marginTop: 10
    },
    content: {
        width: '100%',
        maxWidth: 400
    },
    welcome: {
        fontSize: 23,
        color: '#003265',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    time: {
        fontSize: 20,
        color: '#003265',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    title: {
        fontSize: 20,
        color: '#005187',
        textAlign: 'left',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginTop: 30,
        marginBottom: 5
    },
    training: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    listTraining: {
        width: '100%',
        maxWidth: 400
    },
    container: {
        padding: 10
    },
    label: {
        textAlign: 'left',
        fontSize: 18,
        color: '#000',
        marginTop: 20,
        width: '100%',
        maxWidth: 400,
        fontFamily: 'Roboto'
    },
    input: {
        width: '100%',
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        maxWidth: 400,
    },
    btnContinue: {
        top: 20,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        maxWidth: 400,
        backgroundColor: '#003265',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10
    },
    btnTextContinue: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        textAlign: 'justify',
        marginBottom: 10,
        fontFamily: 'Roboto'
    },
    textEmphasis: {
        color: '#005187',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    textDev: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 10,
        fontFamily: 'Roboto'
    }
});