import React from 'react'
import { auth } from './firebase'
// import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div >
            <div style={{ fontSize: '15px', padding:'5px', borderRadius: '50%', color:'red', border:"1px solid pink",textShadow:'0 0 4px black',fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</div>
        </div>
    )
}

export default SignOut
