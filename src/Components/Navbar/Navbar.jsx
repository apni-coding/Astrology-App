import React from 'react'
import "./Navbar.scss"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navleft">
                    <div className="logo">
                        <a href=""><img src="" alt="" /></a>
                    </div>

                    <div className="sitename">
                        <a href="">Consult with astrologers </a>
                    </div>

                    <div className="blogpage">
                        <a href=""> Blog</a>
                    </div>

                    <div className="horoscopepage">
                        <a href="">Hororscope</a>
                    </div>

                    <div className="shoppage">
                        <a href="">Shop</a>
                    </div>

                    <div className="livepage">
                        <a href="">Live</a>
                    </div>
                </div>
                <div class="navright">
                    <select id="languageDropdown">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                    <button className="signinbtn">Sign up/Login </button>
                </div>

            </nav>





            <hr />
        </>
    )
}
