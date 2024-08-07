import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Categories} from '../data/Categories';

export default function Category() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}>
      {Categories.map(item => (
        <TouchableOpacity key={item.id} style={styles.category}>
          <Image
            source={item.image}
            style={styles.image}
          />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#2c4341',
    fontWeight: '600',
  },
  category: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
  scrollContainer: {
    padding: 10,
  },
});
