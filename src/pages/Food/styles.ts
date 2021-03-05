import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#003265',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    text: {
        fontSize: 18,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
        color: '#000',
        fontFamily: 'Roboto'
    },
    backgroundImg: {
        width: 'auto',
        height: 250,
        marginTop: 20,
        resizeMode: 'cover',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "#000000a0",
    },
    titleImg: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'left',
        marginLeft: 20,
        marginBottom: 20,
        textTransform: 'uppercase',
        textDecorationStyle: "solid",
        fontFamily: 'Roboto'
    }
});