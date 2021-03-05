import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardTraining: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        width: '100%',
        maxWidth: 390,
        marginRight: 15,
    },
    cardHeaderTraining: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#000000',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        textAlign: 'justify',
        padding: 10,
        fontSize: 18
    },
    btnConcluded: {
        backgroundColor: '#003265',
        margin: 10,
        borderRadius: 8
    },
    textConcluded: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: 10,
        fontFamily: 'Roboto'
    }
});