import Chat from '../../comps/Chat';
import Header from '../../comps/Header';
import Link from 'next/link';
import './fun.css'; 
import {FaArrowRight} from 'react-icons/fa'; 
import {useEffect} from 'react';  


const Fun = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#funpage").style.left = 0;
        }, 50); 
    }, []); 

return <div id="funpage">
    <Header text="This is a Fun Page" fontSize={50} />
    <Chat />
    <p> sorry.....it is not really that much fun</p>
    <Link href="../"><button>Return to Index Page<FaArrowRight color='blue' /></button></Link> 
</div>
}

export default Fun; 