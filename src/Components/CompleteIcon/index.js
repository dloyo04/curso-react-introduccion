import React from "react";
import { CgCheckO } from "react-icons/cg";


function CompleteIcon ({className, onClick}) {
      return (
        <CgCheckO
            className={className}
            onClick={onClick}
        />
      )
    }
export { CompleteIcon }
