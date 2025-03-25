import { useContext } from 'react';
import { ICommand } from '../util/util';
import { CommandContext } from '../contexts/CommandContext';
import { Button } from '@mui/material';

export const Commands = () => {
	const { commands } = useContext(CommandContext);
	return (
		<div className='flex flex-col flex-nowrap gap-8 p-12 items-center'>
			{commands.map((c, i) => {
				return <CommandComp key={`command-${i}`} command={c} />;
			})}
		</div>
	);
};

const CommandComp = (props: { command: ICommand }) => {
	const { likeCommand } = useContext(CommandContext);
	return (
		<div className='command'>
			<h1 className='text-5xl'>{props.command.commandName}</h1>
			<p className='text-3xl'>{props.command.description}</p>
			<Button
				variant='contained'
				sx={{ fontSize: '2rem' }}
				onClick={() => likeCommand(props.command.commandName)}>
				Like: {props.command.like}
			</Button>
		</div>
	);
};
