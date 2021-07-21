import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton=({price})=>{
	const priceForStripe=price * 100;
	const publishableKey='pk_test_51JF1BtEwiSnQ4jAiAiRJzYpfy9ZKt8uBU7erKVLLbC07VwLAorZW6mgGoA3R3jqjiVx30FNcUS7FVXRsi4IoHnu700SVEGgULU'
	const onToken=token=>{
		console.log(token);
		alert('payment successful')
	}
	return(<StripeCheckout label='Pay Now' name='ecomerce-shop' billingAdress shippingAdress image='https://sendeyo.com/up/d/f3eb2117da' description={`Your Total is $${price}`} amount={priceForStripe} panelLabel='pay Now' token={onToken}  stripeKey={publishableKey}/>)
}

export default StripeCheckoutButton;
