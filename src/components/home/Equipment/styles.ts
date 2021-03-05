import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardEquipment: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        width: '100%',
        maxWidth: 250,
        marginRight: 15,
    },
    cardHeaderEquipment: {
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
    cardBodyEquipment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#003265'
    },
    description: {
        textAlign: 'justify',
        padding: 10,
        fontSize: 18
    },
    spaceIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detail: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#fff',
        fontFamily: 'Roboto'
    }
})