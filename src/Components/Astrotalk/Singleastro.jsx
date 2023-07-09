import React from 'react';
import "./Singleastro.scss";
import astro1 from "../../Assests/Images/astro1.jpg";
import offer from "../../Assests/Images/offer.png"

export default function Singleastro() {
    return (
        <div className="singleastro">

            <div className="card" style={{ width: 26 + 'rem' }}>
                <div className="offer">
                    <img src={offer} alt="" />
                </div>

                <div className="d-flex align-items-center">
                    <img src={astro1} alt="astrophoto" />
                </div>
                <div className="card-body">
                    <h4 className="card-title m-1">Astro Sanjeev</h4>
                    <p className="cart-text m-1">Exp: 19 years</p>
                    <p className="cart-text m-1">Lang: English, Maithili</p>
                    <p className="cart-text m-1">Skills: Vedic astrology</p>
                    <div className="price m-1 ">
                        <h3>&#8377; 5<span>/min <span className="actuallprice">&#8377;20</span></span></h3>
                        <div className="call">
                            <button><img src="https://cdn-icons-png.flaticon.com/128/4213/4213179.png" alt="call img" />Call</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
