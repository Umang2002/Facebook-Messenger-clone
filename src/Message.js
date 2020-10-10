import { CardContent,Typography,Card } from '@material-ui/core'
import React,{forwardRef} from 'react'
import './Message.css';

const Message=forwardRef(({username,messages},ref)=> {
   const isUser = username === messages.username;
   console.log(messages.userName)
    return (
        <div ref ={ref} className={`message ${isUser && 'message_User'}`}>
         <Card className={isUser ? "message_UserCard":"message_guestcard"}>
         {/* <Card className="message_card"> */}
            <CardContent>
                <Typography
                color="white" 
                variant="h5"
                component="h2"
                >
                {!isUser && `${messages.username || "Unknown"}: `}  {messages.message} 
                </Typography>
            </CardContent>
        </Card>
        </div>
         
             
     
    )
})

export default Message
//1:16:13