import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

import {Link} from "react-router-dom";

const HomePage = ()=>{
    return(
        <div>
            <header>
                <a>
                    <strong>Forty</strong>
                    <span>by HTML5 UP</span>
                </a>
                <nav>Menu</nav>
            </header>
            <div>
                <p>
                    a paragraph of stuff to make our website attractive
                </p>
                <Link className="sign-up-btn">Sign Up</Link>
            </div>
            
            <Contact/>
            <Footer/>
        </div>
        

    )
}


export default HomePage;