import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetail from '../screen/ProductDetail';
import {Data} from '../data/data';
import Products from '../screen/products/Products';
import { Product } from '../features/ProductSlice';

export type SharedElementStackParamList = {
  Products: undefined;
  ProductDetail: {item: Product};
};

const SharedElementNavigator = () => {
  const Stack = createNativeStackNavigator<SharedElementStackParamList>();
  return (
    // @ts-ignore
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="ProductDetail"
          // @ts-ignore
          component={ProductDetail}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SharedElementNavigator;
