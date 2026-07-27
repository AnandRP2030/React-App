import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './taskCard.css';
import { faClock, faLink } from '@fortawesome/free-solid-svg-icons';

export const TaskCard = ({task}) => {
    console.log('task', task)
    const taskCount = 1;
    const title = "";
    const description = "";
    const link = "";

    const steps = [
    ]

    const estimatedTime = {
    }

    const completedTime = {
    }
    
    return (
        <div className="task-card box-border curved-border p-1 box-shadow cursor-grab mt-3">
            <p className="task-title">{taskCount}. {task.title} </p>
            <p className="primary-gray fs-3 mt-1"> {task.description} </p>

            <div className='ml-1 task-steps'>
                <p className="task-steps-title fs-5 my-0">Steps: </p>
                    {steps.map((d, i) => {
                        return <div key={i} className="flex cursor-pointer">
                            <input type="checkbox" />
                            <div className="secondary-gray mt-1 fs-4"> {d} </div>
                        </div>
                    })}
            </div>

            <div className="card-footer flex primary-gray fs-3 justify-content-between mt-2">
                <p> <FontAwesomeIcon icon={faClock} /> Est.{estimatedTime.hour}h {estimatedTime.min}m </p>
                <p>
                    <a href={link} className='primary-gray'><FontAwesomeIcon icon={faLink} /> Task Link </a>
                </p>
            </div>
        </div>
    )
}