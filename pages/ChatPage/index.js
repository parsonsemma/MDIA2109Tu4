import React, {useState, useEffect} from 'react';
import './chatpage.css'; 
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

// var welcome = "Welcome to my App!"

// function SetWelcome() {
//     welcome = "Start with sending a message"; 
//     document.querySelector("#welcome").innerText = welcome; 
// }

const ChatPage = ({}) => {
const [welcome, setWelcome] = useState("Welcome to my App!"); 
const [msg, setMsg] = useState("pls type something"); 
const [resp, setResp] = useState("let me respond to you"); 
const [color, setColor] = useState("red")
const [text, setText] = useState("Please Click Me")

useEffect(()=>{
    setTimeout(()=>{
        document.querySelector("#chatpage").style.right = 0;
    }, 100); 
}, []); 

return <div id='chatpage'>
    <div id="welcome">
    <Header fontSize={32} text={welcome} />
    </div>
    <div id="chat" onClick={() =>{
    setWelcome("Start with sending a message.");
    }}>
        <Chat name={"User 1"} msg={msg} />
        <p /> 
        <Chat img={"https://miro.medium.com/max/4000/1*m9IJdAYW04MYh75ivpwUNA.png"} name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp} />
    </div>
    <div id="controls">
        <Input onClick={(val)=>{
            setMsg(val);
            var new_resp = CheckResponse(val);
            setResp(new_resp); 

            // if(val === "hi"){
            //     setResp("I love pie");
            // }
        }} />
    </div>
    <div id="custom_button">
        <CustomButton text={text} color={color} 
        onClick={()=>{
            setText("Hi There!!!!"); 
            setColor("orange")
        }} /> 
    </div>
</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
        return "I love pie";
    case "how are you?":
        return "great";

    default:
        return "I dont know what you are trying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage; 