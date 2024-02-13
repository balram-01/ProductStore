import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface CounterState {
    products: Product[]
}

const initialState: CounterState = {
    products: [],
}

export const counterSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = (action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const {setProducts } = counterSlice.actions

export default counterSlice.reducer