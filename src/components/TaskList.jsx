import React, { useState } from "react";


const TaskList = ({ state, onChangeTask, onDeleteTask }) => {

    const [editId, setEditid] = useState(null);
    const [editText, setEditText] = useState('')

    const onEditTask = (id) => {
        setEditid(id)
    }

    return (
        <div>
            {state.map((task) => (
                <div key={task.id} style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "10px" }}>
                    <input
                        type="checkbox"
                    />
                    {editId === task.id ? (
                        <input
                            type="text"
                            value={task.editText}
                            onChange={(e) =>
                                setEditText(e.target.value)
                            }
                        />
                    ) : (
                        <input type="text" value={task.text} readOnly />
                    )}

                    {editId === task.id ? (
                        <button onClick={() => {
                            onChangeTask(editId, editText),
                            setEditid(null)
                        }}>
                            Save
                        </button>
                    ) : (
                        <button onClick={() => onEditTask(task.id)}>
                            Edit
                        </button>
                    )}


                    <button onClick={() => onDeleteTask(task.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
