import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskComp from './TaskComp';

const Tasks = () => {
	const { tasks } = useContext(TaskContext);
	return (
		<div className='flex flex-row flex-wrap'>
			{tasks.map((t, i) => {
				return <TaskComp key={`task-${i}`} task={t} />;
			})}
		</div>
	);
};

export default Tasks;
