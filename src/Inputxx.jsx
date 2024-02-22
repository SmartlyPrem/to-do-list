import { useRef } from "react";
function Input(props) {
    const itRef = useRef();
    const findData = () => {

        if (itRef.current.value != "") {
            props.handler(itRef.current.value);
            itRef.current.value = "";
            itRef.current.focus();
        }

    }
    return (
        <div className="row">
            <div className="col">
                <input type="text" ref={itRef} className="form-control" />
            </div>
            <div className="col-2 flex justify-start">
                <button onClick={findData} className="btn btn-primary">Add</button>
            </div>
        </div>
    )
}

export default Input;