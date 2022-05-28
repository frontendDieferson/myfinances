import React from 'react';
import { View, Text} from 'react-native';
import { MotiView } from 'moti';
import styles from './styles';

const Balance = ({ saldo, gastos }) => {
  return(
      <MotiView style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: '1',
      }}
      transition={{
        type: 'timing',
        delay: 300,
        duration: 900

      }}
      >

       <View style={styles.item}>
         <Text style={styles.itemTitle}>Saldo</Text>

         <View style={styles.content}>
           <Text style={styles.currencySimbol}>R$</Text>
           <Text style={styles.balance}>{saldo}</Text>
         </View>
       </View>

       <View style={styles.item}>
         <Text style={styles.itemTitle}>Gastos</Text>

         <View style={styles.content}>
           <Text style={styles.currencySimbol}>R$</Text>
           <Text style={styles.expenses}>{gastos}</Text>
         </View>
       </View>

      </MotiView>

  ) 
}

export default Balance;