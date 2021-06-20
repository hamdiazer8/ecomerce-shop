import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component {
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""

		}
	}
	handelSubmit=async event=>{
		event.preventDefault();
		const {email,password}=this.state;
		try{
			await auth.signInWithEmailAndPassword(email,password);
			this.setState({
			email:'',
			password:''
		})
		} catch(err){
			console.log(err.message)
		}
		
	}
		handelChange=(event)=>{
			const {name,value}=event.target;
			this.setState({
				[name]:value
			})
		}
	render(){
		return(
			<div className='sign-in'>
			<h2 className='title'>I already have an account </h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={this.handelSubmit}>
				
				<FormInput name='email' label='email' type='email' handelChange={this.handelChange} value={this.state.email} required/>
				<FormInput name='password' label='password' handelChange={this.handelChange} type='password' value={this.state.password} required/>
				<div className='buttons'>
				<CustomButton type='submit' >Sign in </CustomButton>
				<CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>
				</div>
			</form>
				
			</div>
			)
	}
}
export default SignIn;