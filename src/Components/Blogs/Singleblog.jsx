import React from 'react';
import jupiter from "../../Assests/Images/jupiter.jpg";
import user from "../../Assests/Images/astro1.jpg";

export default function Singleblog() {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={jupiter} alt="Card image cap" />
      <div className="card-body">
        <span className="text-muted">28 Dec</span>
        <h5 className="card-title">Jupiter in 7th House: Meaning, Positive-Negative Impact And Remedies</h5>
        <p className="card-text">
          Jupiter in the 7th residence represents stability because the 7th residence is the unique residence of Libra,
          which shows stability ... <span>Read blog</span>
        </p>
        <div className="d-flex align-items-center">
          <img src={user} alt="" className="rounded-circle" style={{ width: "30px", marginRight: "10px" }} />
          <span className="font-weight-bold">Ritika</span>
        </div>
      </div>
    </div>
  );
}
