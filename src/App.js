import React,{useState,useEffect} from 'react';
import { Button } from '@material-ui/core';
import { FormControl,InputLabel ,Input} from '@material-ui/core';
import Message from './Message';
import firebase from 'firebase'
import db from './Firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


import './App.css';
function App() {
  const [input,setInput]=useState('')
  const [messages,setMessages] =useState([])
  const [username,setUsername] =useState('');
  const [Darkmode,SetDarkmode] =useState(false)
  
 useEffect(()=>{
     db.collection('messages')
     .orderBy('timestamp','asc')
     .onSnapshot(Snapshot=>{
       setMessages(Snapshot.docs.map(doc=> ({id:doc.id ,message:doc.data()})))
     });
   }, [])

  useEffect(()=>{
     setUsername(prompt("Please! Enter Your Name... "));
   },[])



  const sendMessage = (e)=>{
    //all the logic is goes here
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }

 return (
     <div className="App">
       <div className={Darkmode ? "darkmode" : "lightmode"}> 
   
      <div className="Switch">
      <input id="cb_id" class="toggle-round" type="checkbox" onChange={()=> SetDarkmode(prevMode => !prevMode)}></input>
      <label for="cb_id"></label> 
      </div>
   
      <img className="image_logo" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384893.svg"></img>
      <h1>FaceBook-Messanger</h1>
      <h3>Welcome {username}
      </h3>
      {/* input field */}
      <form  className="app_form">
      <FormControl className="app_formcontrol">
 
      <Input placeholder='Enter Message...' className="app_input" value={input} onChange={e=> setInput(e.target.value)} />
       <IconButton className="app__iconbutton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}
       >
       <SendIcon />
       </IconButton>
     </FormControl>
      </form>
      <FlipMove>
      {
         messages.map(({id,message}) => {
         return <Message key={id} username={username} messages={message}></Message>
        })
      }
      </FlipMove>
      </div>
      </div>
  );
}

export default App;
//01:58:36
