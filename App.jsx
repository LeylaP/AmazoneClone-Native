import {SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <SafeAreaView >
      <NavigationContainer>
      <StatusBar backgroudColor={'#9ee4d4'} barStyle={'dark-content'}/>
      <Router/>
      </NavigationContainer>
    </SafeAreaView>
  )
}
