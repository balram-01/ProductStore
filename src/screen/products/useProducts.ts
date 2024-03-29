//@ts-ignore
import React, { useEffect } from 'react';
import { useGetProductsQuery } from '../../services/api/products.api';
import { useDispatch } from 'react-redux';
import { Product, setProducts } from '../../features/ProductSlice';
import { showErrorToast } from "../../components/Toast/src/utils/ToastUtils"

interface ProductsHookResult {
    products: Product[] | null;
    isLoading: boolean;
    error: any; // Define the type of your error data here
}

const useProducts = (): ProductsHookResult => {
    const { data: products, error, isLoading } = useGetProductsQuery('');
    
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setProducts(products))
        if (error) {
            showErrorToast('Error getting products data')
        }
    }, [dispatch, products, error]);

    return { products, isLoading, error };
};

export default useProducts;
