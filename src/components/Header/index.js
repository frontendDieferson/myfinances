import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles';
import { MotiView, MotiText } from 'moti'


const Header = ({ name }) => {
    return(
        <View style={styles.container}>
            <MotiView 
            style={styles.content}
            from={{
                translateY: -150,
                opacity: 0
            }}
            animate={{
                translateY: 0,
                opacity: 1
            }}
            transition={{
                type: 'timing',
                duration: 800,
                delay: 300,
            }}
            >
                <MotiText 
                style={styles.contentUser}
                from={{
                    translateX: - 300
                }}
                animate={{
                    translateX: 0
                }}
                transition={{
                    type: 'timing',
                    duration: 800,
                    delay: 800,
                }}
                >
                    Bem vindo {name}!
                    </MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={28} color='#FFF' />
                </TouchableOpacity>
            </MotiView>
           
        </View>
    ) 
        
    
}

export default Header;