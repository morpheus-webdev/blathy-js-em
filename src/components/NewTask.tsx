import { useContext, useState } from 'react';
import { defaultTask, ITask } from '../util/util';
import { Button, TextField } from '@mui/material';
import { TaskContext } from '../contexts/TaskContext';

const NewTask = () => {
	const { addTask } = useContext(TaskContext);
	const [newTask, setNewTask] = useState<ITask>(defaultTask);
	return (
		<div>
			<TextField
				placeholder='Task name...'
				onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
			/>
			<TextField
				placeholder='Duration...'
				onChange={(e) =>
					setNewTask({ ...newTask, duration: parseInt(e.target.value) })
				}
			/>
			<Button
				onClick={() => {
					if (newTask.name !== '' && newTask.duration !== 0) {
						addTask(newTask);
					}
				}}>
				Add new task
			</Button>
		</div>
	);
};

export default NewTask;
