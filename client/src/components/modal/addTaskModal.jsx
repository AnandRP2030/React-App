import { useState } from 'react';
import { Modal } from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

export const AddTaskModal = ({ onClose, addTask, currStage }) => {
    const [titleError, setTitleError] = useState("");

    const [task, setTask] = useState({
        title: '',
        description: '',
        estimate: '',
        taskLink: '',
        steps: [
        ], 
        currStage: currStage
    });

    const addNewStep = () => {
        const currStep = task.currStep.trim();

        if (!currStep) {
            return;
        }

        const allSteps = [...task.steps, currStep];

        setTask(prev => ({
            ...prev,
            steps: allSteps,
            currStep: ''
        }));
    }

    const handleChanges = (e) => {
        const {name, value} = e.target;

        setTask(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleAddTask = () => {
        if (!task.title.trim()) {
            setTitleError("Title is required.");
            alert("Title is required.")
            return;
        }
        
        addTask(task);
        resetFields();
    }

    const resetFields = () => {
        setTask({
            title: '',
            description: '',
            estimate: '',
            taskLink: '',
            steps: [], 
            currStage: currStage
        });
    }

    return (
        <Modal onClose={onClose}>
            <div className="task-modal">
                {/* Header */}
                <div className="task-modal-header">
                    <h2>Add New Task</h2>

                    <button
                        className="icon-btn"
                        type="button"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>

                {/* Body */}

                <div className="task-modal-body">

                    <div className="form-group">
                        <label>
                            Task Title <span>*</span>
                        </label>

                        <input
                            type="text"
                            value={task.title}
                            placeholder="Task title.."
                            onChange={handleChanges}
                            name="title"
                        />
                    </div>

                    <div className="form-group">
                        <label>Task Description</label>

                        <textarea
                            rows="2"
                            value={task.description}
                            placeholder="Describe the task..."
                            name="description"
                            onChange={handleChanges}
                        />
                    </div>

                    <div className="two-column-grid">

                        <div className="form-group">
                            <label>Estimated Time</label>

                            <input
                                type="text"
                                value={task.estimate}
                                placeholder="1h 30m"
                                name="estimate"
                                onChange={handleChanges}
                            />

                            <small>
                                Examples: 45m, 1h, 1h 30m
                            </small>
                        </div>

                        <div className="form-group">
                            <label>Task Link (Optional)</label>

                            <input
                                type="url"
                                name="taskLink"
                                value={task.taskLink}
                                placeholder="https://..."
                                onChange={handleChanges}
                            />
                        </div>

                    </div>

                    <div className="steps-section">

                        <div className="steps-header">
                            <label>
                                Steps ({task.steps.length})
                            </label>
                        </div>

                        <div className="steps-container mb-6">

                            {task.steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="step-row"
                                >
                                    <div className="step-number">
                                        {index + 1}
                                    </div>

                                    <input
                                        type="text"
                                        value={step}
                                        readOnly
                                    />

                                    <button
                                        className="step-delete-btn"
                                        type="button"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            ))}

                        </div>

                        <div className="flex add-step-input-container form-group">
                            <input
                                type="text"
                                value={task.currStep}
                                placeholder="Write your steps.."
                                name="currStep"
                                onChange={handleChanges}
                            />

                            <button
                                type="button"
                                className="add-step-btn"
                                onClick={addNewStep}
                            >
                                + Add Step
                            </button>
                            
                        </div>


                    </div>

                </div>

                {/* Footer */}

                <div className="task-modal-footer">

                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="btn-primary"
                        onClick={() => {
                            handleAddTask();
                        }}
                    >
                        Add Task
                    </button>

                </div>

            </div>
        </Modal>
    );
}