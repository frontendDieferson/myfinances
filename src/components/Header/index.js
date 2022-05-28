import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Feather } from '@expo/vector-icons'


const Header = ({ name }) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.contentUser}>Bem Vindo {name}!</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={28} color='#FFF' />
                </TouchableOpacity>
            </View>
           
        </View>
    ) 
        
    
}

export default Header;