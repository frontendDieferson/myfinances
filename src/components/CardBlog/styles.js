import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    content: {
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        
    },
    image:{
        width: 110,
        height: 100,
        
        borderRadius: 10,
        marginStart: 14,
        marginEnd: 14,

        
    },
    title: {
        fontSize: 12,
        color: '#2C3E50',
        fontWeight: 'bold'
    },
    titleText: {
        width: 110,
        fontSize: 10,
        color: '#7f8c8d',
    }
})

export default styles;