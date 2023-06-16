import React from "react"


function Addlocal(addL) {
<div className="menu_input">
    <input type="text" id="location" className="input_m" name="location" placeholder="Add Location" onKeyUp={addL.onKey}></input> 
</div>
    
}

export default Addlocal