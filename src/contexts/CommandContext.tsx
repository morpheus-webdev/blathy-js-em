import { createContext, ReactNode, useState } from 'react';
import { defaultCommands, ICommand } from '../util/util';

//interface
interface ICommandContext {
	commands: ICommand[];
	likeCommand: (name: string) => void;
	addCommand: (newCommand: ICommand) => void;
	getTopCommand: () => ICommand[];
}

//defObj
const defaultCommandContext: ICommandContext = {
	commands: [],
	likeCommand: (name) => {},
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
	const [commands, setCommands] = useState<ICommand[]>(defaultCommands);
	function likeCommand(name: string) {
		/* let myArr = commands.map((c, i) => {
			return { name: c.name, index: i * 100, kiskutya: 'VOOF' };
		});
		console.log(myArr); */
		let newCommandArr = commands.map((c, i) => {
			return c.name === name ? { ...c, like: c.like + 1 } : c;
		});
		setCommands(newCommandArr);
	}
	function addCommand(newCommand: ICommand) {
		let newCommandArr = [...commands, newCommand];
		setCommands(newCommandArr);
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
