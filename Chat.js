import { Avatar ,IconButton} from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import './Chat.css';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';


function Chat() {
    const [{user},dispatch] =  useStateValue();
 const [input , setInput ] = useState("");
 const {roomId} = useParams();
 const [room, setRoom] = useState("");
 const [messages,setMessages] = useState([]);


 useEffect(() => {


if(roomId){
  db.collection('rooms').doc(roomId).onSnapshot((snapshot)=>
setRoom(snapshot.data().name));
    db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot) =>
   setMessages(snapshot.docs.map((doc) => (doc.data())
       ))
    );
}
 }, [roomId]);
 const sendMessage=(e)=>{
     e.preventDefault();
db.collection('rooms').doc(roomId).collection('messages').add({
    message:input,
    name:user.displayName,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
});
     setInput("");

 };
  
    return (
        <div className="chat">
<div className="header">
    <Avatar src="https://avatars1.githubusercontent.com/u/30051235?s=400&u=e43f7b772fa749baee973c229281c836ecd80dba&v=4" />
    <div className="info">
        <h3>{room}</h3>
        <p>Online </p>
    </div>
    <div className="head_rg">
        <IconButton>
            <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
            <AttachFileIcon />
        </IconButton>
        <IconButton>
            <MoreVertIcon />
        </IconButton>
    </div>
</div>
<div className="chat_body">
{messages.map((message) => (
    <p className={`message ${message.name== user.displayName &&  "reciver"} `}>
    <span className="name">
   {message.name}

    </span>
 {message.message}
    <span className="time"> 
   {new Date(message.timestamp?.toDate()).toUTCString()}
    </span>
    
    </p>
))
}
    
</div> 
<div className="footer">
<InsertEmoticonOutlinedIcon  className="insert"/>
<form>
    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="type a message" type="text"></input>
    <button onClick={sendMessage} type="submit" > Send Message</button>
</form>
<MicIcon  className="mic"/>
</div>
            
        </div>
    )
}

export default Chat;
