import React, { useState } from "react";
// import "./Card.css"
function Card(carta) {
    const [superH,setSuperH] = useState(true);
    
    return (
        <div className="card border-0" style={{ width: "25rem" }}>
            <div style={{ height: "18rem" }}>
                <img src={carta.photo} className="card-img-top rounded-4 " alt="imagen" style={{ height: "100%" }}></img>
            </div>
            <div className="d-flex justify-content-between" >
                <h5>
                    {superH && (<span className="badge text-bg-secondary rounded-4">SUPER HOST</span>)}
                    {/* <span className="badge text-bg-secondary rounded-4">SUPER HOST</span> */}
                </h5>
                <span className="text-start">
                    {carta.type}, {carta.beds} beds
                </span>
                <div className="">
                    <span className="material-symbols-outlined align-middle" style={{ color: "orange" }}>
                        star
                    </span>
                    <span className="align-middle">{carta.rating}</span>
                </div>
            </div>
            <div>
                <p className="fw-bold">{carta.title}</p>
            </div>
        </div>
    )
}

export default Card