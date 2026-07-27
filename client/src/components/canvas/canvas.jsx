import { TaskContainer } from "../taskContainer/taskContainer";
import { TASK_STATUS } from "../../constants/taskStatus";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

import './canvas.css';

const taskUIArray = [
    {
        id: 1,
        title: TASK_STATUS.TODO,
        description: "Tasks waiting to be started",
        emptyText: "Tasks you add appear here.",
        icon: faInbox,
        headerIcon: faInbox,
        color: "var(--todo)",
        stage: TASK_STATUS.TODO
    },
    {
        id: 2,
        title: TASK_STATUS.DOING,
        description: "Tasks in progress",
        emptyText: "Tasks you add and start will appear here.",
        icon: faListUl,
        headerIcon: faCircleDot,
        color: "var(--doing)",
        stage: TASK_STATUS.DOING
    },
    {
        id: 3,
        title: TASK_STATUS.DONE,
        description: "Completed tasks",
        emptyText: "Tasks you complete will appear here.",
        icon: faCircleCheck,
        headerIcon: faCircleCheck,
        color: "var(--done)",
        stage: TASK_STATUS.DONE
    },
]

export const Canvas = ({openModal, tasks}) => {

    return (
        <div className="canvas">
            {taskUIArray.map((taskUI) => <TaskContainer tasks={tasks} openModal={openModal} key={taskUI.id} taskUI={taskUI}/>)}
        </div>
    )
}