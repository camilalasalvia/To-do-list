import { useState, useEffect } from "react";
import { AddTaskBar } from './AddTaskBar';
import { TaskList } from './TaskList';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export const ToDoApp = () => {

    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if(savedTheme) {
            setDarkMode(savedTheme === 'true');
            if(savedTheme === 'true') {
                document.documentElement.classList.add('dark');
                document.body.classList.add('bg-black');
            }
        }
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if(darkMode) {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-black');
            localStorage.setItem('darkMode', 'false');
        }
        else {
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-black');
            localStorage.setItem('darkMode', 'true');
        }
    }

    const handleAddTask = () => {
        if(newTask.trim() === '') return;
        const nextTasks: string[] = [...tasks, newTask];
        setTasks(nextTasks);
        setNewTask('');
    }

    const handleDeleteTask = (index: number) => {
        setTasks(tasks => tasks.filter((_, current) => current !== index));
    }

    return (
        <div className="app-container">
            <button onClick={toggleTheme} className="change-mode-button">
                {darkMode ? <SunIcon className="w-7 h-7 text-darkGray"/> : <MoonIcon className="w-7 h-7 text-lightGray"/> }
            </button>
            <h1 className="heading">to-do list.</h1>
            <AddTaskBar onNewTask={setNewTask} onAddTask={handleAddTask} currentTask={newTask}/>
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
        </div>
    );
}