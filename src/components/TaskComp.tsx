import { Button } from '@mui/material';
import { ITask } from '../util/util';
import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskComp = (props: { task: ITask }) => {
	const task = props.task;
	const { deleteTask } = useContext(TaskContext);
	return (
		<div className='task-class'>
			<h1 className='text-5xl'>{task.name}</h1>
			<p className='text-2xl'>{task.duration} minutes</p>
			<Button
				sx={{ backgroundColor: 'red', color: 'white' }}
				onClick={() => deleteTask(task.id)}>
				Delete
			</Button>
		</div>
	);
};

export default TaskComp;
