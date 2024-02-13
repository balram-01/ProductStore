// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REACT_APP_PRODUCTS_BASE } from "@env"
import { Product } from '../../features/ProductSlice'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_PRODUCTS_BASE }),
    endpoints: (builder) => ({
        getProducts: builder.query<any, string>({
            query: () => `/products`,
            transformResponse: (response: { products: Product[] }) =>
                response.products,
        }),
    
        getProductById: builder.query<any, string>({
            query: (id) => `/products/${id}`
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery, useGetProductsQuery } = productApi