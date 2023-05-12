import React from "react";
import notfound from "./notfound.png";

function NotFoundPage(){
    return(
        <img src={notfound} alt="notfound" style={{width: '50%' }}/>

    );
}

export { NotFoundPage };