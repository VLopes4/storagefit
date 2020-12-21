import { StyleSheet } from 'react-native';

const stylesGb = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f5faff'
    },
    imgBack: {
        width: 'auto',
        height: 250
    },
    imgBackContent: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: "#000000a0",
    },
    imgBackIcon: {
        fontSize: 35,
        color: '#fff',
        marginTop: 10,
        marginLeft: 15
    },
    titleFeed: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#003265'
    },
    textFeed: {
        fontSize: 18,
        textAlign: 'justify',
        color: '#000'
    },
    cardInput: {
        flex: 1,
        flexDirection: 'column',
    },
    label: {
        textAlign: 'left',
        fontSize: 18,
        color: '#000',
        marginTop: 20
    },
    input: {
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
    },
    btnAdd: {
        backgroundColor: '#005187',
        borderRadius: 5,
        width: 200,
        padding: 10,
        marginBottom: 20,
        marginTop: 20
    },
    textAdd: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});

export default stylesGb;