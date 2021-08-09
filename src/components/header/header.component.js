import React from 'react';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer,LogoContainer,OptionsConatiner,OptionLink} from './header.styles.js';
import {createStructuredSelector} from 'reselect';





const Header=({currentUser,hidden})=>(
<HeaderContainer>
<LogoContainer to='/' >
<Logo className='logo' />
</LogoContainer>
<OptionsConatiner>
<OptionLink to='/shop'>
SHOP
</OptionLink>
<OptionLink to='/signin'>
	CONTACT 
</OptionLink>
{
	currentUser ? <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink> : <OptionLink to='/signin'>SIGN IN </OptionLink>
}

<CartIcon/>

</OptionsConatiner>
{hidden ? null:<CartDropdown/>}

</HeaderContainer>)

const mapStateToProps=createStructuredSelector({
	currentUser:selectCurrentUser,
	hidden:selectCartHidden})
export default connect(mapStateToProps)(Header);
