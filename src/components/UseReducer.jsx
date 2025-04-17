import { useReducer } from "react";
import React from "react";


function reducer(state, action) {
    switch (action?.type) {
        case "INCREAMENT_AGE": {
            return {
                name: state.name,
                age: state.age + 1
            }
        }
        case "CHANGE_NAME": {
            return {
                name: action.payload,
                age: state.age
            }
        }
    }

}

const initialstate = { name: "Rohan", age: 13 }

export default function Form() {

    const [state, dispatch] = useReducer(reducer, initialstate);

    function handleButtonClick() {
        dispatch({
            type: "INCREAMENT_AGE"
        });
    }

    function changeName(e) {
        dispatch({
            type: "CHANGE_NAME",
            payload: e.target.value
        })
    }

    return (
        <div style={{borderBottom:"1px solid black",marginBottom:"30px"}}>
            <h4>Type the name to change</h4>
            <input
                type="text"
                value={state.name}
                onChange={changeName}
            />
            <div style={{marginTop:"10px"}}>
                <button onClick={handleButtonClick} style={{ marginLeft: "10px" }}>
                    Increament age
                </button>
            </div>
            <p>Hello,{state.name}. you are {state.age} years old</p>
        </div>
    )
}