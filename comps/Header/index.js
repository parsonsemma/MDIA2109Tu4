import React from 'react';
import './header.css'

const Header = ({text, fontSize, color, onMouseOver}) => <div
style={{fontSize, color, onMouseOver}}
onMouseOver={onMouseOver}
>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function MouseOver(){
    alert("mouse is over"); 
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver
}

export default Header; 