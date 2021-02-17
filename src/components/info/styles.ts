import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    titleSection: {
        fontSize: 25,
        color: '#003265',
        fontWeight: 'bold',
        marginBottom: 20
    },
    card: {
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#737373',
        backgroundColor: '#FFF',
        marginBottom: 20,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#003265',
        marginBottom: 10
    },
    description: {
        fontSize: 18,
    },
    additionals: {
        flexDirection: 'row',
        marginTop: 15
    },
    additional: {
        flexDirection: 'row',
        marginRight: 20
    },
    detail: {
        fontSize: 18,
        marginLeft: 5
    },
    optionText: {
        fontSize: 20,
        marginTop: 10,
        color: '#005187',
        fontWeight: 'bold',
    },
});