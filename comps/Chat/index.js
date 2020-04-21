import React from 'react'; 
import './chat.css';
import Header from '../Header';

const defaultImg = require('./default.png .png'); 

const Chat = ({msg, img, name, backgroundColor}) => <div 
style={{backgroundColor:backgroundColor}}
className="chat_card"> 
<div className="chat_user">
    <img src={img} />
    <Header fontSize="100%" text={name} />
</div>

<div className="chat_msg">
{msg}
</div>

</div>; 

Chat.defaultProps = {
    msg:"Please Type Someting!",
    img:defaultImg,
    backgroundColor:"#EEE",
    name:"Username"
}

export default Chat; 