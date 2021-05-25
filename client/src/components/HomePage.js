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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link className="sign-up-btn">Sign Up</Link>
            </div>
            <Contact/>
            <Footer/>
        </div>
        

    )
}


export default HomePage;