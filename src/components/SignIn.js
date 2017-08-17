import React, { Component } from 'react';

export default class SignIn extends Component {
    render() {
        return (
            <div className="signin-background">
                <div className="signin-container"> 
                    <div className="signin-header"><h1>Excel Interiors</h1></div>
                    <div className="signin-subhead"><h3>60 years experience with the know-how you need</h3></div>
                    
                <a href='http://localhost:3001/auth'>
                    <button className="signin-button">Sign In</button>
                </a> 
                </div>  
            </div>    
        )
    }
}