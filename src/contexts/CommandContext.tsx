import { createContext, ReactNode, useEffect, useState } from 'react';
import { ICommand } from '../util/util';

//interface
interface ICommandContext {
	commands: ICommand[];
	likeCommand: (commandName: string) => void;
	addCommand: (newCommand: ICommand) => void;
	getTopCommand: () => ICommand[];
}

//defObj
const defaultCommandContext: ICommandContext = {
	commands: [],
	likeCommand: (commandName) => {},
	addCommand: (newCommand) => {},
	getTopCommand: () => {
		return [];
	},
};

//Context
export const CommandContext = createContext<ICommandContext>(
	defaultCommandContext
);

//ContextProvider
export const CommandContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [commands, setCommands] = useState<ICommand[]>([]);
	let updateCommands = async () => {
		let res = await fetch('/api/commands').then((data) => data.json());
		setCommands(res);
	};
	useEffect(() => {
		updateCommands();
	}, []);
	function likeCommand(commandName: string) {
		console.log(commandName);

		let newCommandArr = [...commands].map((c, i) => {
			return c.commandName === commandName ? { ...c, like: c.like + 1 } : c;
		});
		setCommands(newCommandArr);
	}
	async function addCommand(newCommand: ICommand) {
		//let newCommandArr = [...commands, newCommand];
		let res = await fetch('/api/new-command', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCommand),
		}).then((data) => data.json());
		console.log(res);

		updateCommands(); //TODO await response
		//setCommands(newCommandArr);
	}
	function getTopCommand() {
		let maxLike = 0;
		commands.forEach((c, i) => {
			if (c.like > maxLike) {
				maxLike = c.like;
			}
		});
		let topCommandArr = commands.filter((c, i) => {
			return c.like === maxLike;
		});
		return topCommandArr;
	}
	return (
		<CommandContext.Provider
			value={{
				commands,
				likeCommand,
				addCommand,
				getTopCommand,
			}}>
			{children}
		</CommandContext.Provider>
	);
};
