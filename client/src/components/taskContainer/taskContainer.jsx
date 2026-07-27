import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './taskContainer.css';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TaskCard } from "../taskCard/taskCard";

export const TaskContainer = (props) => {
    const { taskUI, openModal, tasks } = props;
    const { title, description, emptyText, icon, headerIcon, color, stage } = taskUI;
    const count = 0;
    const isTasksEmpty = false;

    return (
        <div className="task-container" style={{ border: `1px solid rgba(${color}, 0.15)`, borderTop: `4px solid rgb(${color})` }}>
            <div className="flex task-title-row">
                <div style={{ color: `rgb(${color})` }}>
                    <FontAwesomeIcon icon={headerIcon} />
                </div>

                <span>
                    {title}
                </span>

                <div>
                    <span style={{ backgroundColor: `rgba(${color}, 0.20)` }}>{count}</span>
                </div>

            </div>
            <p className="primary-gray">{description}</p>
            {isTasksEmpty ?
                <div>
                    <EmptyContainer emptyText={emptyText} icon={icon} color={color} />
                </div> :

                <div className="task-cards-container">

                    {
                        tasks.filter((task) => task.currStage === stage)
                        .map((task) => (
                            <TaskCard key={task.id} task={task}/>
                        ))
                    }
                    
                </div>
            }

            <div className="add-task-btn-container">
                <button className="add-task-btn" style={{
                    color: `rgb(${color})`
                }} onClick={() => {

                    openModal(stage);
                }}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add Task
                </button>
            </div>
        </div>
    )
}

export const EmptyContainer = (props) => {
    const { emptyText, icon, color } = props;
    return <div className="empty-container box-border curved-border flex justify-content-center align-items-center flex-direction-column">
        <div className="empty-icon-box rounded-border" style={{
            border: `1px dotted rgba(${color}, 0.60)`,
            color: `rgb(${color})`
        }}>
            <FontAwesomeIcon icon={icon} fontSize={25} />
        </div>
        <p className="no-task-text">No tasks yet</p>
        <p className="primary-gray">
            {emptyText}
        </p>

    </div>
}