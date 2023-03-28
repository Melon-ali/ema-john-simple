import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {name, img, price, seller, ratings} = product;
    return (
        <div className='product'>
           <img src={img} alt="" /> 
           <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
           </div>
           <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
           </button>
        </div>
    );
};

export default Product;