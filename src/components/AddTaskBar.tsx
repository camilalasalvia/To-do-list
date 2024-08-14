import { PlusIcon } from '@heroicons/react/24/outline';

export const AddTaskBar: React.FC<{
    onNewTask: (task: string) => void;
    currentTask: string;
    onAddTask: () => void;
}> = ({ onNewTask, currentTask, onAddTask }) => {
    return (
        <div className="flex">
            <input
            type="text"
            value={currentTask || ''}
            onChange={(e) => onNewTask(e.target.value)}
            placeholder="New task..."
            className="input"
            />
            <button onClick={onAddTask} className="add-task-button">
                <PlusIcon className="w-5 h-5"/>
            </button>
        </div>
    );
}