import { useState } from 'react';
import { defaultTask, ITask } from '../util/util';
import { Button, TextField } from '@mui/material';

const NewTask = () => {
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
					console.log(newTask);
				}}>
				Add new task
			</Button>
		</div>
	);
};

export default NewTask;
