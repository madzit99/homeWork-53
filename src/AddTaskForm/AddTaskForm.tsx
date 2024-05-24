import React from "react";

interface Props {
    edit: React.ChangeEventHandler<HTMLInputElement>,
    addTask:React.MouseEventHandler,
    value: string,
}

const AddTaskForm:React.FC<Props> = ({
    edit, addTask, value
}) => {
    return (
        <div className="my-form">
            <input type="text" id="name" className="my-form" value={value} onChange={edit}/>
            <button type="button" id="btn" className="btn" onClick={addTask}>Добавить</button>
        </div>
    )
}

export default AddTaskForm;