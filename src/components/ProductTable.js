import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
    let filteredProducts = props.products.filter(prod => 
        prod.name.includes(props.search.toLowerCase())
    )
    console.log(props.products);

    return (
        <table>
            <thead>
            </thead>
            <tbody>
                {filteredProducts.map((product, idx) => 
                <ProductRow 
                    product={product}
                    key={idx}
                />
                )}
            </tbody>
        </table>
    )
}


export default ProductTable