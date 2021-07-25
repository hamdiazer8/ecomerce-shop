import React from 'react';
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
constructor(){
	super();
	this.state={
		displayName:'',
		email:'',
		password:'',
		confirmPassword:''}
}
handelChange=event =>{
	const {name,value}=event.target;
	this.setState({
		[name]:value
	})
}
	handelSubmit=async event=>{
		event.preventDefault();
		const {displayName,email,password,confirmPassword}=this.state;
		if(password !== confirmPassword){
			alert("the password and confirmPassword does'nt match")
			return;
		}
		 try{  const {user}=await auth.createUserWithEmailAndPassword(email,password);
		await createUserProfileDocument(user,{displayName})
		this.setState({
			displayName:'',
		    email:'',
		    password:'',
		    confirmPassword:''

		})

		 } catch(err){
		 	console.error(err)
		 }
	}
render(){
	const {displayName,password,confirmPassword,email}=this.state;
	return (<div className='sign-up'>
		    <h2 className='title'> I don't have an email and password</h2>
		    <span> Sign Up with </span>
		    <form class='sign-up-form' onClick={this.handelSubmit}>
		       <FormInput type='text' name='displayName' value={displayName} onChange={this.handelChange} label='display Name' required />
		       <FormInput type='email' name='email' value={email} onChange={this.handelChange} label='email' required />
		       <FormInput type='password' name='password' value={password} onChange={this.handelChange} label='password' required />
		       <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handelChange} label='confirm Password' required/>
		       <CustomButton type='button' > SIGN UP</CustomButton>
		</form>
		</div>)
	
}
}
export default SignUp;