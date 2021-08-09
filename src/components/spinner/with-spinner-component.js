import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles.js';
const WithSpinner=()=>wrappedComponent=>({isLoading,...otherProps})=>{
	return isLoading ? (<SpinnerOverlay><SpinnerContainer/></SpinnerOverlay>):<wrappedComponent{...otherProps}/>
}

export default WithSpinner;