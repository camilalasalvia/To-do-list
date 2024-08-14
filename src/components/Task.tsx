import { MinusIcon } from "@heroicons/react/24/outline";

export const Task: React.FC<{
    task: string;
    onDeleteTask: () => void;
}> = ({ task, onDeleteTask }) => {
    return (
        <div className="task-container">
            <span className="task-text">{task}</span>
            <button onClick={onDeleteTask} className="delete-task-button">
                <MinusIcon className="w-5 h-5 text-black"/>
            </button>
        </div>
    );
}