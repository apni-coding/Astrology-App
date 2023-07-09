import React from 'react'
import "./Specialiteis.scss";


export default function Specialities() {
    return (
        <div className="specialities">
            <div className="text">
                <h1>Specialities</h1>
                <p>Consult with top astrologers across specialities</p>
            </div>
            <div className="option">
                <div className="love">
                    <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt="" />
                    <p>Love</p>
                </div>

                <div className="marriage">
                    <img src="https://cdn-icons-png.flaticon.com/128/3656/3656836.png" alt="" />
                    <p>Marriage</p>
                </div>
                <div className="career">
                    <img src="https://cdn-icons-png.flaticon.com/128/1589/1589592.png" alt="" />
                    <p>Career</p>
                </div>
                <div className="life">
                    <img src="https://cdn-icons-png.flaticon.com/128/1518/1518739.png" alt="" />
                    <p>Life</p>
                </div>
                <div className="health">
                    <img src="https://cdn-icons-png.flaticon.com/128/2382/2382461.png" alt="" />
                    <p>Health</p>
                </div>

                
            </div>
        </div>
    )
}
