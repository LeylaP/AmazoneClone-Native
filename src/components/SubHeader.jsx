import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';

export default function SubHeader() {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.row}>
          <Octicons name="location" size={16} color="#1f1f1f" />
          <Text style={styles.deliverText}>Deliver to Denizli - Pamukkale Adress</Text>
          <Octicons name="chevron-down" size={20} color="#1f1f1f" />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    gap: 10,
  },
  deliverText:{
    fontSize:13,
  }
});
