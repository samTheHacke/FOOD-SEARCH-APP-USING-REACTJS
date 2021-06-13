import React from 'react'

const Menu = ({title,calories,image})=>{
   
    return(
    <div style={{display:"flex",alignItems: "center" }}> 
    <h1>{title}</h1>
    <p>{calories}</p>
    <img src={image} alt=""/>
    </div>
    );
    
}
export default Menu;
