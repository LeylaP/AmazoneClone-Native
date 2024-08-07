import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function Header() {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={20} color="#1f1f1f" />
            <TextInput
              style={styles.textInput}
              placeholderTextColor={'#848484'}
              placeholder="Search amazon"
            />
          </View>
          <AntDesign name="scan1" size={20} color="#909594" />
        </View>
        <Feather name="mic" size={20} color="#1f1f1f" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  textInput: {
    padding: 2,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#a1bcc0',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  container: {
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
