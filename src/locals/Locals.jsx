import React from "react"
import "./Locals.css"
function Locals(locales) {
    return (
        <div className="locales_01">
            <span className="material-symbols-outlined">
                location_on
            </span>
            <span className="loc">{locales.ciudad}</span>,
            <span className="loc">{locales.pais}</span>
            <span className="loc">{locales.rating}</span>
            <span className="material-symbols-outlined align-middle" style={{ color: "rgb(235, 87, 87)" , fontSize:"10px"}}>
                star
            </span>
        </div>
    )
}

export default Locals