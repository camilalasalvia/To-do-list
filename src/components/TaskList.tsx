import { Task } from './Task';

export const TaskList: React.FC<{
    tasks: string[];
    onDeleteTask: (index: number) => void;
}> = ({ tasks, onDeleteTask }) => {
    return (
        <div className="w-82 h-full mt-5">
            {
                tasks.map((task, index) => (
                    <Task task={task} onDeleteTask={() => onDeleteTask(index)}/>
                ))
            }
        </div>
    );
}