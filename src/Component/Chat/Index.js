import React, { useEffect, useState, useRef } from 'react'
import { io } from 'socket.io-client'

const Index = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMjM1MWM5YTM3NjU5NGM3YzY0ZjhiNiIsImlhdCI6MTYxMzIxNTI5NywiZXhwIjoxNjEzMjIyNDk3fQ.asktCFdjIkl5Xm5GhGfXSFqlP1xJZa_bpm7VF75GZAU'
    const socket= useRef('');
    const [chat,setChat] = useState("")
    const [ready,setReady] = useState(false);
    useEffect(()=> {   
        socket.current = io(process.env.REACT_APP_NODESERVER,{
            extraHeaders : {
                'x-auth-token' :token
            },
            transportOptions : {
                polling : {
                    extraHeaders : {
                        'x-auth-token': token
                    }
                }
            }
        })
        
        socket.current.on("connect",()=> {
            setReady(true)
        })
        socket.current.on("success",function(payload){
            console.log(payload)
        })

    },[]);
    const submitChat = e => {
        e.preventDefault();
        let payload = {chat,idTujuan : "602350dcc45b0c04cca2d946"};
        socket.current.emit("sendMessage",payload,function(callback){
            console.log(callback)
        })
    }

    return (
        <div>
            {
                ready ? 
                <div>
                    <form onSubmit={submitChat}>
                        <input type="text" onChange={e=> setChat(e.target.value)} value={chat} />
                        <button type="submit">
                            submit
                        </button>
                    </form>
                </div> : null
            }
        </div>
    )
}

export default Index
