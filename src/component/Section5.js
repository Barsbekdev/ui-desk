import React from "react";
import init from "../img/4.png"
import li from "../img/5.png"
import il from "../img/6.png"
import {AiFillFacebook} from 'react-icons/ai'
import {DiAtom} from 'react-icons/di'
import {DiGrunt} from 'react-icons/di'
import {DiMozilla} from 'react-icons/di'
const Section5 = () => {
    return (
        <div className="Section5">
            <div className="container">
                <div className="Section5">
                    <div className="Section5-logo">
                        <center><h1>Met Our Team</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            quis <br/>
                            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                        </p></center>
                        <div className="mit">  <div className="mix">
                            <img src={init} alt=""/>
                            <h1>Sunny Khan <br/>
                            </h1><p>Executive officer</p>
                            <div className="icons"><AiFillFacebook className='icon'/>
                                <DiMozilla className='icon'/>
                                <DiAtom className="icon"/>
                                <DiGrunt className='icon'/>
                            </div>
                        </div>
                            <div className="mi">
                                <img src={li} alt=""/>
                                <h1>Sunny Khan <br/>
                                </h1><p>Executive officer</p>
                                <div className="icons"><AiFillFacebook className='icon'/>
                                    <DiMozilla className='icon'/>
                                    <DiAtom className="icon"/>
                                    <DiGrunt className='icon'/>
                                </div>
                            </div>
                            <div className="m">
                                <img src={il} alt=""/>
                                <h1>Sunny Khan <br/>
                                </h1><p>Executive officer</p>
                                <div className="icons"><AiFillFacebook className='icon'/>
                                    <DiMozilla className='icon'/>
                                    <DiAtom className="icon"/>
                                    <DiGrunt className='icon'/>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <center><h1>Subscribe to get the Latest News</h1><p>We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p></center>
                            <input type="email "/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section5;