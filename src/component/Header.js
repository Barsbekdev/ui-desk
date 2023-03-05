import React from "react";
import logo from "../img/Logo.png"
const Header = () =>{
    return(
        <div className="">
<div className="container">
    <div className="Header">
        <div className="Header-logo">
            <img src={logo} alt=""/>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Service</a>
            <a href="">Pricing</a>
<button className="btn">Contact </button>
        </div>
    </div>
</div>
        </div>
    )
}
// const btn1 = document.querySelector('button')
// btn1.addEventListener('click',()=>{

// })
// // const btn = document.createElement('div')
// // btn.setAttribute('class','square')
// // btn.addEventListener('mouseover',() => {
// //     btn.body.background = `${randomColor()}`
// //     btn.body.background = 'scale(1.2)'
// // })
export default Header;