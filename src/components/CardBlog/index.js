import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'




const CardBlog = () => {
  return(
      <View style={styles.container}>
          
            <TouchableOpacity style={styles.content}>

           <Image style={styles.image} source={image1} />
           <Text style={styles.title}>Dicas de Finanças</Text>
           <Text style={styles.titleText}>Aqui vai um testo muito legal sobre dicas em Finanças</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.content}>
                
           <Image style={styles.image} source={image2} />
           <Text style={styles.title}>Dicas de Finanças</Text>
           <Text style={styles.titleText}>Aqui vai um testo muito legal sobre dicas em Finanças</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.content}>
           <Image style={styles.image} source={image3} />
           <Text style={styles.title}>Dicas de Finanças</Text>
           <Text style={styles.titleText}>Aqui vai um testo muito legal sobre dicas em Finanças</Text>
           </TouchableOpacity>

          </View>
        
      
  )
}

export default CardBlog;