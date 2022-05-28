import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import styles from './styles';

const Actions = () => {
  return(
      <ScrollView 
      style={styles.container} 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      >
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={26} color="#34495e" />
        </View>
        <Text style={styles.buttonLabel}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="tagso" size={26} color="#34495e" />
        </View>
        <Text style={styles.buttonLabel}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={26} color="#34495e" />
        </View>
        <Text style={styles.buttonLabel}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="barcode" size={26} color="#34495e" />
        </View>
        <Text style={styles.buttonLabel}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
            <AntDesign name="setting" size={26} color="#34495e" />
        </View>
        <Text style={styles.buttonLabel}>Conta</Text>
    </TouchableOpacity>
      </ScrollView>
  ) 

}

export default Actions;