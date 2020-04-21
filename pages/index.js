 
import Link from 'next/link';
import Router from 'next/router'; 
import {FaSearchDollar} from 'react-icons/fa';
import {GiBurningTree} from 'react-icons/gi'; 
import {FaRegSmileBeam} from 'react-icons/fa'; 
import {FaArrowRight} from 'react-icons/fa'; 
import './index.css'; 

function ClickIndex(){

document.querySelector("#mainapp").style.right = "-100%";
setTimeout(function(){
    Router.push("/ChatPage"); 
    }, 1000)
}

function ClickRandom(){
    if(confirm("are you sure?")){
        Router.push("/Random"); 
    }
}

const Index = () => <div id="mainapp">

     <div onClick={ClickIndex}> Index</div> 
    <FaSearchDollar />
    <Link href="/ChatPage"><button><GiBurningTree color="#ABC" />Chat!</button></Link>
    <Link href="/Contact"><button><FaRegSmileBeam color='red' />Contact Me!</button></Link>
    <Link href="/Fun"><button><FaArrowRight color='orange' />Fun FuN FUN!</button></Link>
    <div onClick={ClickRandom}>RANDOOOOOMMMMMM</div>
</div>

export default Index; 