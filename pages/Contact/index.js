import {useState, useEffect} from 'react';  
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css'; 

var index = 0; 
const headers_arr = [
    "thanks for contacting Me!",
    "GoodBye",
    "let me know if you have other questions"
]

const Contact = () => {

    const [header_text, setHeader] = useState("Contact me!"); 
    const [pageright, setRight] = useState("100%");
    // const [index, setIndex] = useState(0); 

    useEffect(()=>{
        setTimeout(()=>{
            setRight(0);
        }, 100); 
    }, []); 

    useEffect(() => {
        // alert('hi! Header text has changed');
        setRight(20);
        setTimeout(()=>{
            setRight(0);
        }, 500); 
    }, [header_text]); 



return <div id='contactpage' style={{right:pageright}}>
    <Header text={header_text} fontSize={24} />
    <CustomButton text="email" onClick={()=>{
       
        setHeader(headers_arr[index]);
        index++;
        if(index > headers_arr.length){
            index=0; 
        }
    }} />
</div>
}

export default Contact; 