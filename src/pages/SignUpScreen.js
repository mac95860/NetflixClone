import React from 'react'
import './SignUpScreen.css'

function SignInScreen() {
    return (
        <div className = "signupScreen">
            <form>
                <h1>
                    Sign In
                </h1>
                <input placeholder = "email" type = "email"/>
            </form>
        </div>
    )
}

export default SignInScreen
