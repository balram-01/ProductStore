import { FlatList, StyleSheet, Text } from 'react-native';
// @ts-ignore
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RenderItem from '../../components/RenderItem';
import {useGetProductsQuery} from '../../services/api/products.api';
import {useDispatch} from 'react-redux';
import useProducts from './useProducts';

const Products = () => {
const {products, isLoading, error} = useProducts();
  
  return (
    <>
      {/* <Text style={styles.text}>Popular Destinations</Text> */}
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return <RenderItem item={item} index={index} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
  },
  text: {
    fontSize: 34,
    marginHorizontal: 20,
    color: '#323232',
    fontWeight: 'bold',
  },
});
