import React from "react";

const DisplayR = (props) =>{
    const dataR = props.itemsR.map(
        (d,i) =>{
            return (<li className="list-group-item d-flex justify-content-between" key={i}> <p className="m-0 ">{d}</p> <span className="fw-bold clickli" onClick={()=>{props.removeR(i)}}>X</span> </li>)
        }
        ) 
    
        return (
            <ul className="list-group">
                {dataR}
            </ul>
        )
}

export default DisplayR;