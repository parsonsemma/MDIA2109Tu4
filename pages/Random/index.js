
import Input from '../../comps/Input';
import Header from '../../comps/Header';
import Link from 'next/link';
import './random.css'; 
import {FaArrowRight} from 'react-icons/fa'; 
import {useEffect} from 'react';  

const Random = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#randompage").style.right = 0;
        }, 150); 
    }, []); 

return <div id="randompage">
    <Header text="This is a Random Page" fontSize={38} />
    <Input /><FaArrowRight color='orange' />
    <p> well......it is a random page!! what were you expecting???</p>
   <Link href="../"><button>Return to Index Page<FaArrowRight color='blue' /></button></Link> 
</div>
}

export default Random; 