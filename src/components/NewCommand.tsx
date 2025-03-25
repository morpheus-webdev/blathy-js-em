import { useContext, useState } from 'react';
import { CommandContext } from '../contexts/CommandContext';
import { Button, TextField } from '@mui/material';
import { defaultCommand, ICommand } from '../util/util';

export const NewCommand = () => {
	const { addCommand } = useContext(CommandContext);
	const [newCommand, setNewCommand] = useState<ICommand>(defaultCommand);
	function handleAdd() {
		if (newCommand.commandName && newCommand.description && newCommand.url) {
			addCommand(newCommand);
		}
	}
	return (
		<div className='flex flex-col flex-nowrap items-center w-full'>
			<div className='w-1/2 p-8 flex flex-col flex-nowrap items-center gap-8'>
				<TextField
					placeholder='Name...'
					onChange={(e) =>
						setNewCommand({ ...newCommand, commandName: e.target.value })
					}
				/>
				<TextField
					placeholder='Description...'
					onChange={(e) =>
						setNewCommand({ ...newCommand, description: e.target.value })
					}
				/>
				<TextField
					placeholder='Url...'
					onChange={(e) =>
						setNewCommand({ ...newCommand, url: e.target.value })
					}
				/>
				<Button variant='contained' onClick={handleAdd}>
					Add new command
				</Button>
			</div>
		</div>
	);
};
