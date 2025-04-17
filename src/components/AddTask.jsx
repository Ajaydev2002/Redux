import React from "react";
import { useState } from "react";


const AddTask = ({onAddTask}) => {
    
    const [text, setText] = useState('');

    return (
        <div style={{display:"flex",gap:"10px"}}>
            <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button
            onClick={() => {
                onAddTask(text);
                setText('')
            }}>
                Add
            </button>
        </div>
    );
}

export default AddTask;