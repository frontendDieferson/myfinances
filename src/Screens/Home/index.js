import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

import Balance from '../../components/Balance';


const Home = () => {
  return (
    <View style={styles.container}>
        <Header name="Dieferson Soares" />
        

        <Balance saldo="5.000,00" gastos="-900,00"/>
    </View>
  )
}

export default Home;