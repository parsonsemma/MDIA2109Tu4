import React from 'react'; 
import CustomButton from '../comps/CustomButton'; 
import Header from "../comps/Header";
import Input from "../comps/Input";
import Chat from "../comps/Chat";
import ChatPage from "../pages/ChatPage"; 

export default {
    title: "My comps",
    component: CustomButton, 
}; 

export const MyCustomButton = () => <CustomButton />;

function CancelClick(){
        alert("Cancel");
    }

export const MyCustomButtonWithOptions = () => <CustomButton 
    color="#999"
    text="Cancel"
    onClick= {CancelClick} 
/>;

export const MyHeader = () => <Header />;
export const MyInput = () => <Input />;
export const MyInputWithPlaceholder = () => <Input 
    placeholder="Custom placeholder"
/>;
export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />

// export const PageWithCustomButtons = () => <div>
//     <Header
//     fontSize={15}
//     color="orange"
//     onMouseOver= {CancelClick} />

//     <Header
//     fontSize={25}
//     color="red"
//     onMouseOver= {OkClick} />

//     <Header
//     fontSize={35}
//     color="green"
//     onMouseOver= {SubmitClick}/>

//     <Header
//     fontSize={55}
//     color="blue"
//      />

//     <CustomButton 
//     color="#999"
//     text="Cancel"
//     onClick= {CancelClick} />
//     <CustomButton 
//     color="#3F5"
//     text="OK" 
//     onClick= {OkClick} />
//     <CustomButton 
//     color="#F3F"
//     text= "Submit"
//     onClick= {SubmitClick}  />
//     <CustomButton 
//     text="Menu"  />
// </div>

// function CancelClick(){
//     alert("Cancel");
// }

// function OkClick(){
//     alert("Ok");
// }

// function SubmitClick(){
//     alert("Submit");
// }