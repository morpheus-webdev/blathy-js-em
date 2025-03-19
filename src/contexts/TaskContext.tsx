import { createContext, ReactNode, useEffect, useState } from 'react';
import { ITask } from '../util/util';

//interface
interface ITaskContext {
	tasks: ITask[];
	addTask: (task: ITask) => void;
}

//defaultObj
const defaultTaskContext: ITaskContext = {
	tasks: [],
	addTask: (task) => {},
};

//context
export const TaskContext = createContext<ITaskContext>(defaultTaskContext);

//ContextProvider
export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
	//children
	//value
	const [tasks, setTasks] = useState<ITask[]>([]);
	useEffect(() => {
		console.log(tasks);
	}, [tasks]);
	function addTask(task: ITask) {
		setTasks([...tasks, task]);
	}
	return (
		<TaskContext.Provider value={{ tasks, addTask }}>
			{children}
		</TaskContext.Provider>
	);
};
