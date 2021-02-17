import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#003265'
    },
    description: {
        fontSize: 18,
        textAlign: 'center'
    },
    img: {
        width: '100%',
        maxWidth: 400,
        height: 250
    },
    label: {
        textAlign: 'left',
        fontSize: 18,
        color: '#000',
        marginTop: 20,
        width: '100%',
        maxWidth: 400
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
        marginBottom: 50
    },
    btnTextContinue: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});