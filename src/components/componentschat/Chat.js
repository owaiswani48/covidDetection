import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from './firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setLoading(false)
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            {/* <SignOut /> */}
            <div className="msgs">
                {loading ? 'loadingMessage.....':(messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} style={{display:'flex',justifyContent:'space-between'}} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt=""  style={{border:'2px solid black',
                            width:'3rem', heigth:'3rem ', borderRadius:'50%'
                            }}/>
                            <p>{text}</p>
                        </div>
                    </div>
                )))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
