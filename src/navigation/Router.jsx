import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
   
  );
};

export default Router;
