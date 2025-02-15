import { useState, useEffect } from "react";
import { FaCheck, FaEdit, FaTrash, FaMoon, FaSun } from "react-icons/fa";

const TodoApp = () => {

    // total 6 useState

    //  for all task
    const [tasks, setTasks] = useState([]);
    //  for title and description inputs
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    //  for check editing mode
    const [isEditing, setIsEditing] = useState(false);
    //  for edit task id 
    const [editTaskId, setEditTaskId] = useState(null);
    // for light/dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Load tasks from localStorage on mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []; 
        setTasks(storedTasks);
    
    }, []);

    // Save tasks to localStorage when tasks change
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    // Save darkMode state to localStorage
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const addOrUpdateTask = () => {
        if (!title || !description) {
            alert("Please fill in both fields.");
            return;
        }

        if (isEditing) {
            setTasks(tasks.map(task => task.id === editTaskId ? { ...task, title, description } : task));
            setIsEditing(false);
            setEditTaskId(null);
        } else {
            const newTask = { id: tasks.length + 1, title, description, isCompleted: false };
            setTasks([...tasks, newTask]);
        }
        setTitle("");
        setDescription("");
    };

    const toggleCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update storage immediately
    };

    const editTask = (id) => {
        const task = tasks.find(task => task.id === id);
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setIsEditing(true);
            setEditTaskId(id);
        }
    };

    return (
        <div className={`min-h-screen flex justify-center items-center p-4 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <div className={`w-full max-w-md rounded-xl shadow-lg p-6 transition-all 
                ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Todo App</h1>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-lg p-2 rounded-full bg-gray-200 dark:bg-gray-600"
                    >
                        {darkMode ? <FaSun className="text-black" /> : <FaMoon />}
                    </button>
                </div>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? "bg-gray-700 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-600"}`}
                    />
                    <input
                        type="text"
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={`w-full p-2 border rounded ${darkMode ? "bg-gray-700 text-white placeholder-gray-400" : "bg-white text-black placeholder-gray-600"}`}
                    />
                    <button
                        onClick={addOrUpdateTask}
                        className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-500"
                    >
                        {isEditing ? "Update Task" : "Add Task"}
                    </button>
                </div>
                <div className="mt-6">
                    {tasks.length === 0 ? (
                        <p className="text-center text-gray-500">No tasks available</p>
                    ) : (
                        <ul className="space-y-2">
                            {tasks.map((task) => (
                                <li key={task.id} className={`flex justify-between items-center p-2 border rounded ${task.isCompleted ? "bg-green-100 line-through" : "bg-white dark:bg-gray-700"}`}>
                                    <div>
                                        <h3 className="font-semibold text-black">{task.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{task.description}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button onClick={() => toggleCompletion(task.id)} className="text-green-500 hover:text-green-700">
                                            <FaCheck />
                                        </button>
                                        <button onClick={() => editTask(task.id)} className="text-blue-500 hover:text-blue-700">
                                            <FaEdit />
                                        </button>
                                        <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
