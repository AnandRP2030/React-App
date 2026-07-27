import { Canvas } from "../components/canvas/canvas";
import { Header } from "../components/header/header";
import { useEffect, useState } from "react";
import { SHORTCUTS } from "../constants/shortcuts"; 
import { AddTaskModal } from "../components/modal/addTaskModal";
import "./dashboard.css";

let currStage = "";

export const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => { 

        // Short keys implementation.
        const handleShortcut = (e) => {
            if (e.key === SHORTCUTS.ESCAPE && isModalOpen) {
                setIsModalOpen(false);
                return;
            }

            const tagName = e.target.tagName?.toLowerCase();
            const isTyping = tagName === 'input' || tagName === 'textarea';

            if (isTyping) return;

            if (e.key.toLowerCase() === SHORTCUTS.ADD_TASK && !isModalOpen) {
                setIsModalOpen(true);
            }

        };

        window.addEventListener('keydown', handleShortcut);

        return () => {
            window.removeEventListener('keydown', handleShortcut);
        }

    }, []);

    
    const addTask = (newTask) => {
        setTasks((prevTask) => [...prevTask, newTask]);
    }

    const openModal = (stage) => {
        currStage = stage;
        setIsModalOpen(true);
    };
    
    return (
        <div className="dashboard">
            <div className="header-container">
                <Header />
            </div>

            <div className="canvas-container">
                <Canvas openModal={openModal} tasks={tasks}/>
            </div>

            {isModalOpen && <AddTaskModal currStage={currStage} onClose={() => setIsModalOpen(false)} addTask={addTask}/>}
        </div>
    )
}