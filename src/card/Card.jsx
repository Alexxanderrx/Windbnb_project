import React, { useState } from "react";
import "./Card.css"
function Card(carta) {

    const estado = carta.superH;
    const estadoBed = carta.beds;
    let maxGuests= carta.maxGuests;
    return (
        <div className="card_00">
            <div className="card_img">
                <img src={carta.photo} className="card-img-top" alt="imagen" ></img>
            </div>
            <div className="card_01" >
                {estado && (<span className="card_superH">SUPER HOST</span>)}

                <span className="card_beds">
                    {carta.type} {estadoBed == null ? "" : `. ${carta.beds} beds`} 
                </span>

                <div className="card_stars">
                    <span className="material-symbols-outlined align-middle" style={{ color: "rgb(235, 87, 87)" }}>
                        star
                    </span>
                    <span className="card_rating">{carta.rating}</span>
                </div>
            </div>
            <div>
                <p className="fw-bold">{carta.title}</p>
            </div>
        </div>
    )
}

export default Card