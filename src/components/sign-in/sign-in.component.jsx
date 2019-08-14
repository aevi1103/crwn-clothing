import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInwithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        value={this.state.email} 
                        type='email' 
                        label='Email'
                        handleChange={this.handleChange} />

                    <FormInput 
                        name='password' 
                        value={this.state.password} 
                        type='password' 
                        label='Password'
                        handleChange={this.handleChange}
                        required/>
                
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInwithGoogle} isGoogleSignIn={true} >Sign In with Google</CustomButton>
                    </div>
                    

                </form>


            </div>
        );
    }

}

export default SignIn;