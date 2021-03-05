import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContent: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardKg: {
        width: '100%',
        maxWidth: 110,
        maxHeight: 100,
        height: '100%',
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 8
    },
    cardKgTitle: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 18,
        textTransform: 'uppercase'
    },
    cardKgNumber: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#005187',
        fontFamily: 'Roboto'
    },
    icon: {
        fontSize: 35,
        color: '#005187',
        fontFamily: 'Roboto'
    },
});