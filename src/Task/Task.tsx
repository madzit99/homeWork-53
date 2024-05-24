interface Task  {
    text:string;
    onDelete: () => void; 
}

const Task:React.FC<Task> = ({text, onDelete}) => {
    return (
        <div className="task">
            <p>{text}</p>
            <button type="button" className="delete-btn" onClick={onDelete}>Удалить!</button>
        </div>
    );
};

export default Task;