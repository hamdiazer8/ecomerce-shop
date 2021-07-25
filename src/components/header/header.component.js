import React from 'react';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer,LogoContainer,OptionsConatiner,OptionLink,OptionDiv} from './header.styles.js';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';




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
	currentUser ? <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink to='/signin'>SIGN IN </OptionLink>
}

<CartIcon/>

</OptionsConatiner>
{hidden ? null:<CartDropdown/>}

</HeaderContainer>)

const mapStateToProps=createStructuredSelector({
	currentUser:selectCurrentUser,
	hidden:selectCartHidden})
export default connect(mapStateToProps)(Header);
