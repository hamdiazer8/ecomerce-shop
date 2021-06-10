import React from 'react';

class SignIn extends React.Component {
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""

		}
	}
	handelSubmit=(event)=>{
		event.preventDefault();
		this.setState({
			email:'',
			password:''
		})
		handelChange=event=>{
			const {name,value}=event.target;
			this.setState({
				[name]:value
			})
		}

	}
	render(){
		return(
			<div className='sign-in'>
			<h2>I already have an account </h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={this.handelSubmit}>
				
				<input name='email' type='email' onChange={this.handelChange} value={this.state.email} required/>
				<label>
				Email
				</label>
				<input name='password' onChange={this.handelChange} type='password' value={this.state.password} required/>
				<label>
				password
				</label>
				<input type='submit' value='submit'/>
			</form>
				
			</div>
			)
	}
}
export default SignIn;