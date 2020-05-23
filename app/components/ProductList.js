import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({product}) {
    return (
        product.map (
            (product) => {
                return (
                    <ProductItem 
                        key={product.id}
                        {...product}
                    />
                )
            }
        )
    )
}
