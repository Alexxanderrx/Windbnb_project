import React from "react"
import "./Locals.css"
function Locals(locales) {
    // function printText(event) {
    //     let name= event.target.value;
    //     return (
    //         console.log(name)
    //     )
    //   }
    //   useEffect(()=>{
    
    //   },[])
    return (
        <div type="button" className="locales_01" onClick={printText} value={"hola"}>
            <span className="material-symbols-outlined">
                location_on
            </span>
            <span id="ci" className="loc">{locales.ciudad}</span>,
            <span className="loc">{locales.pais}</span>
            <span className="loc">{locales.rating}</span>
            <span className="material-symbols-outlined align-middle" style={{ color: "rgb(235, 87, 87)" , fontSize:"10px"}}>
                star
            </span>
        </div>
    )
}

export default Locals