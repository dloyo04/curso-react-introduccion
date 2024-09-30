import React from "react";
import { CgCloseO } from "react-icons/cg";

function DeleteIcon({className, onClick}) {
    return(
        <CgCloseO
        className={className}
        onClick={onClick}
        />
    )
}

export { DeleteIcon }