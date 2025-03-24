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
		//TODO
	}
	function addCommand(newCommand: ICommand) {
		//TODO
	}
	function getTopCommand() {
		//TODO
		return [];
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
