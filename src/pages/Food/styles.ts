import { StyleSheet } from 'react-native';
import { Border } from 'victory-native';

export const styles = StyleSheet.create({
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
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'left',
        marginLeft: 20,
        marginBottom: 20,
        textTransform: 'uppercase',
        textDecorationStyle: "solid"
    }
});