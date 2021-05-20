import React, { useEffect,useState } from 'react';
import './SideChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import {Link} from 'react-router-dom';



function SideChat({id,name,AddNewChat}) {

    const [messages,setMessages] = useState([]);

 useEffect(()=>{
if(id){
    db.collection('rooms').doc(id).collection('messages').orderBy('timstamp','dsc').onSnapshot((snapshot) =>
 
    setMessages(snapshot.docs.map((doc)=> doc.data())
    )
    );
}
    },[id]);

const createChat = ()=>{
const roomName = prompt("please enter name for the chat");
if(roomName){
    db.collection('rooms').add({
        name:roomName,
    });

}
};

    return  !AddNewChat ?(
        <Link to={`/rooms/${id}`}>
<div className="side">
            <Avatar src="https://avatars1.githubusercontent.com/u/30051235?s=400&u=e43f7b772fa749baee973c229281c836ecd80dba&v=4" />
            <div className="people">
                <h2 className="hhh">{name}</h2>
                <p className="ppp">{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
        
        ):(
<div onClick={createChat}
className="create">
    <h2 className="hh1">Add New Chat</h2>
</div>
        )
}

export default SideChat
