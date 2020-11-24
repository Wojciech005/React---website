import React from 'react';
import { Link } from 'react-router-dom'
import Product from '../components/Product'

const ProductsPage = ({match}) => {
    return(
        <>
        <div>Product page</div>
        <Product id={match.params.id} />
        <Link to="/products" > return to products site </Link>
        </> 
    )
}
export default ProductsPage;