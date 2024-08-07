import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { CarouselData } from '../data/CarouselData'

export default function Carousel() {
  return (

    
    <View style={styles.carouselContainer}>
        <Swiper showsPagination={false}
        style={styles.wrapper}
        showButtons={false}
        autoplay={true}>
            {CarouselData.map(item=>(
                <View key={item.id} style={styles.slide}>
                <Image key={item.id} style={styles.imageStyle} source={item.image}/>
            </View>
            ))}
        </Swiper>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    slide:{

    },
    carouselContainer:{
        position:'relative',

    },
    imageStyle:{
        height:250,
        width:'100%',

    }
})