import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: 180,
        borderWidth: 1,
        borderColor: '#005187',
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnIco: {
        width: 150,
        height: 100,
        resizeMode: 'center'
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#005187',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Roboto'
    }
});