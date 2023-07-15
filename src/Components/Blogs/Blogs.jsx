import React from 'react'
import "./Blogs.scss";
import Singleblog from "./Singleblog"

export default function Blogs() {
    return (
        <>
            <div className="blogtxt">
                <h1>BLOGS</h1>
            </div>
            <div className="blogs">
                <Singleblog />
                <Singleblog />
                <Singleblog />
                
            </div>
        </>
    )
}
