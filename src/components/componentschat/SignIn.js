import React from 'react'
import firebase from 'firebase' 
import { auth } from './firebase'
function SignIn() {
    function signInWithGoogle() { 
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    
    
    return (
      
    <div>
        

        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        
    
           
        
            <button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600',display:'flex',justifycontent:'center',width:'unset'}} onClick={signInWithGoogle}>Sign In With Google</button>
            <img src="https://newassets.apollo247.com/images/img-doctors@1x.jpg" alt="Online Doctor Consultation"></img>
        </div>
        </div>
        
        
        
    
    )
}

export default SignIn

