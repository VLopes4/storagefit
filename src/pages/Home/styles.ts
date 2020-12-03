import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardKg: {
        width: 100,
        height: 100,
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
        color: '#005187'
    },
    cardTraining: {
        backgroundColor: '#ffffff',
        width: 340,
        height: 100,
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 8,
        margin: 10,
        bottom: 20
    },
    cardHeaderTraining: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        borderBottomWidth: 1,
        borderColor: '#737373',
    },
    weekDay: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    trainingTitle: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 15
    }
});