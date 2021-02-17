import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardTraining: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 8,
    },
    cardHeaderTraining: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#737373',
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
        padding: 10
    }
});