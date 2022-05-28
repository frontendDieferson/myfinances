import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 10,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,

        shadowColor: "#000",
            shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
    },
    item: {},
    itemTitle: {
        color: '#95a5a6',
        fontSize: 20,
        fontWeight: '700',
        
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySimbol: {
        color: '#95a5a6',
        marginRight: 6,
    }, 
    balance: {
        fontSize: 22,
        color: '#2ecc71',
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c',
    }
})

export default styles;