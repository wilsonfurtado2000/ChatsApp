import React, { useEffect,useState } from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideChat from './SideChat';
import db from './firebase';
import {useStateValue} from './StateProvider';

function Sidebar() {
    const [rooms,setRooms] =  useState([]);
    const [{user},dispatch] = useStateValue();

    useEffect(()=>{
     db.collection('rooms').onSnapshot((snapshot) =>
            setRooms(snapshot.docs.map((doc) => 
              ({
        id:doc.id,
        data:doc.data(),
              }) )
              )
        );
    
 },[]);
    return (
        <div className="sidebar">
            <div className="header_right">
            <Avatar src={user?.photoURL} />
            <div className="right_icon">
        <IconButton>
        <DonutLargeIcon />
       </IconButton>
       <IconButton>
          <ChatIcon />

        </IconButton>
        <IconButton>
                <MoreVertIcon />
        </IconButton>
</div>
</div>
        <div className="search_bar">
            <div className="cont">
<SearchOutlinedIcon className="icon_s" />
<input placeholder="search" type="text"></input>
            </div>
        </div>

        <div className="side_chat">
        <SideChat  AddNewChat={true}/>
         {rooms.map((room)=>(
             <SideChat key={room.id} id={room.id}
                 name={room.data.name}
             />
         ))}
        </div>
            
        </div>
    )
}

export default Sidebar
