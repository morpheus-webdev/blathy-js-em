import { useContext, useEffect, useState } from 'react';
import { defaultTask, ITask } from '../util/util';
import { Button, TextField } from '@mui/material';
import { TaskContext } from '../contexts/TaskContext';
import { v4 } from 'uuid';

const NewTask = () => {
	const { addTask } = useContext(TaskContext);
	const [newTask, setNewTask] = useState<ITask>(defaultTask);
	useEffect(() => {
		setNewTask({ ...newTask, id: v4() });
	}, []);
	return (
		<div className='p-16 flex flex-col flex-nowrap items-center gap-12'>
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
						setNewTask({ ...newTask, id: v4() });
					}
				}}>
				Add new task
			</Button>
		</div>
	);
};

export default NewTask;
