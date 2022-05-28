import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#7f8c8d',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#7f8c8d',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        color: '#2c3e50',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight:'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight:'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#bdc3c7',
        borderRadius: 4,
    },
})

export default style;