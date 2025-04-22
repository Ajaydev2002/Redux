import React, { useReducer } from "react"
import AddTask from "./AddTask"
import TaskList from "./TaskList"


function tasksReducer(state, action) {
    switch (action?.type) {
        case "ADD_TASK": {
            return [
                ...state, {
                    id: action.id,
                    text: action.payload
                }
            ]
        }
        case "CHANGE_NAME": {
            return state.map((task) => {
                if (task.id === action.payload.newId) {
                    return {
                        ...task,
                        text: action.payload.newText
                    }
                } else {
                    return task
                }
            })
        }
        case "DELETE_NAME": {
            return state.filter(task => task.id !== action.payload);
        }
    }
}

const initialstate = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
]

let Taskid = 3;

const TaskApp = () => {

    const [state, dispatch] = useReducer(tasksReducer, initialstate);

    function handleAddTask(text) {
        dispatch({
            type: "ADD_TASK",
            payload: text,
            id: Taskid++
        })
    }

    function handleChangeTask(newId, newText) {
        dispatch({
            type: "CHANGE_NAME",
            payload: { newId, newText }
        })
    }

    function handledeleteTask(id) {
        dispatch({
            type: "DELETE_NAME",
            payload: id
        })
    }


    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                state={state}
                onChangeTask={handleChangeTask}
                onDeleteTask={handledeleteTask}
            />
        </div>
    )
}

export default TaskApp;