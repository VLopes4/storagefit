import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#003265',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
        color: '#000'
    },
    btn: {
        width: 380,
        borderWidth: 2,
        borderColor: '#003265',
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    gradient: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btnIco: {
        width: 150,
        height: 100,
        resizeMode: 'center',
        marginRight: 10
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'left',
        textTransform: 'uppercase',
        marginLeft: 5,
    }
});