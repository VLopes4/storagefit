import { StyleSheet } from 'react-native';;

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 380,
        top: 5
    },
    icon: {
        fontSize: 35,
        color: '#005187'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#003265',
        margin: 10,
        fontFamily: 'Roboto'
    },
    multiIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 70
    }
});