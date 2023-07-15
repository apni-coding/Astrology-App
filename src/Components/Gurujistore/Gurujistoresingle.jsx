import React from 'react'
import nirkar from "../../Assests/Images/Nirkar-rudrkasha.jpg"

export default function Gurujistoresingle() {
  return (
    <>
    <div className="card" style={{width: 14 + "rem"}}>
  <img className="card-img-top" src={nirkar} alt="Card image cap"/>
  <div classNameName="card-body">
    <h5 className="card-title">Nirakar Rudraksha, Origin-Nepal, Lab Certified </h5>
    <p className="card-text">Rudraksh</p>
    <div className="buybtn">
        <div className="price">
            <h4>&#8377; 1,899</h4>
            <span>&#8377; 2,078</span>
        </div>
        <button>Buy</button>
    </div>
  </div>
</div>
    
    </>
  )
}
