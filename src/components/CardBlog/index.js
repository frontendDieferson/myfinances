import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'




const CardBlog = () => {
  return(
      <View style={styles.container}>
          
            <View style={styles.content}>

           <Image style={styles.image} source={image1} />
           <Text style={styles.title}>Dicas de Finanças</Text>
           <Text style={styles.titleText}>Aqui vai um testo muito legal sobre dicas em Finanças</Text>
            </View>

            <View style={styles.content}>
                
           <Image style={styles.image} source={image2} />
           <Text style={styles.title}>Dicas de Finanças</Text>
           <Text style={styles.titleText}>Aqui vai um testo muito legal sobre dicas em Finanças</Text>
            </View>

            <View style={styles.content}>
           <Image style={styles.image} source={image3} />
           <Text style={styles.title}>Dicas de Finanças</Text>
           <Text style={styles.titleText}>Aqui vai um testo muito legal sobre dicas em Finanças</Text>
           </View>
           
          </View>
        
      
  )
}

export default CardBlog;