import {createSelector} from 'reselect';
const selectCart= state=> state.cart;
export const selectCartHidden=createSelector([selectCart],carte=>carte.hidden)
export const selectCartItems= createSelector([selectCart],cart=> cart.cartItems);
export const selectCartItemsCount= createSelector([selectCartItems],cartItems=>cartItems.reduce((accumQuantity,cartItem)=>accumQuantity + cartItem.quantity,0))
export const selectCartTotal=createSelector([selectCartItems],(cartItems)=>cartItems.reduce((acc,cartItem)=>acc + cartItem.quantity* cartItem.price,0));
