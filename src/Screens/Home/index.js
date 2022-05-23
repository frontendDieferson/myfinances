import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
        <Header />
        <Text>Página Home</Text>
    </View>
  )
}

export default Home;