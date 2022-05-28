import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '390,00',
    date: '10/06/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '190,00',
    date: '12/06/2022',
    type: 1 // receita / entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '3.500,00',
    date: '10/06/2022',
    type: 1 // despesas
  },
  
]

const Home = () => {
  return (
    <View style={styles.container}>
        <Header name="Dieferson Soares" />
        
        <Balance saldo="5.000,00" gastos="-900,00"/>

        <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item} /> }
      />
    </View>
  )
}

export default Home;