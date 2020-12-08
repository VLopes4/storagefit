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
    }
});

export default stylesGb;