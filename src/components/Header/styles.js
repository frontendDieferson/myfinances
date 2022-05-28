import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2C3E50',
      paddingTop: statusBarHeight,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentUser: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
  });

export default styles