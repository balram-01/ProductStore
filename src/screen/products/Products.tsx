import { FlatList, StyleSheet, Text } from 'react-native';
// @ts-ignore
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RenderItem from '../../components/RenderItem';
import {useGetProductsQuery} from '../../services/api/products.api';
import {useDispatch} from 'react-redux';
import useProducts from './useProducts';
import ProductSkeleton from './ProductsSkeleton';
import Header from '../../components/Header';

const Products = () => {
  const {products, isLoading, error} = useProducts();
  const skeletonArray = new Array(5).fill(null); // Create an array of length 20

  return (
    <>
      {/* {skeletonArray.map((_, index) => (
        <ProductSkeleton key={index} /> // Render MySkeletonComponent 20 times
      ))} */}
      {/* <Text style={styles.text}>Popular Destinations</Text> */}
      <Header/>
      <FlatList
        ListEmptyComponent={
          <>
            {skeletonArray.map((_, index) => (
        <ProductSkeleton key={index} /> // Render MySkeletonComponent 20 times
      ))}
          </>
        }
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
