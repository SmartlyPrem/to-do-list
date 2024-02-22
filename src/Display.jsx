import React, { useState } from "react";

const Display = (props) => {


    const data = props.items.map(
        (d, i) => {
            return <NewLi key={i} i={i} data = {d} remove={props.remove}/>
        }
    )

    return (
        <ul className="list-group">
            {data}
        </ul>
    )
}

export default Display;


const NewLi = (props) => {

    const [cross, setCross] = useState(false);

    const crossLi = () => {
        setCross(!cross)
    }

    return <li onClick={crossLi} className="list-group-item d-flex justify-content-between"> <p className={`m-0 text-break ${cross == true ? 'text-decoration-line-through text-muted' : ''}`}>{props.data}</p> <span className="fw-bold clickli" onClick={() => { props.remove(props.i) }}>X</span> </li>
}