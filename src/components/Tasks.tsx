import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const Tasks = () => {
	const { tasks } = useContext(TaskContext);
	return (
		<div>
			{tasks.map((t, i) => {
				return (
					<div key={`task-${i}`}>
						{t.name} - {t.duration} mins
					</div>
				);
			})}
		</div>
	);
};

export default Tasks;
