import React from 'react';
import './checkout-item.styles.scss';
const CheckoutItem=({cartItem:{imgUrl,name,price,quantity}})=>(
	<div className='checkout-item'>
	<div className='image-container'>
	<img src={imgUrl} alt='item'/>
	</div>
	<span className='name'>{name}</span>
	<span className='quantity'>{price}</span>
	<span className='price'>{quantity}</span>
	<div className='remove-button'>
	&#10005	
	</div>
	</div>
	)
export default CheckoutItem;
