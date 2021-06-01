import React from 'react'
import './SignUpScreen.css'

function SignInScreen() {
    return (
        <div className = "signUpScreen">
            <form>
                <h1>
                    Sign In
                </h1>
                <input placeholder = "email" type = "email"/>
                <input placeholder = "Password"  type = "password"/>
                <button type = "submit">Sign In</button>
                <h4><span className = "signUpScreen_gray">New to Netflix? </span> Sign Up Now.</h4>
            </form>
        </div>
    )
}

export default SignInScreen
