import { useContext, useEffect, useState } from 'react';
import { CommandContext } from '../contexts/CommandContext';
import { ICommand } from '../util/util';

export const TopCommand = () => {
	const { getTopCommand } = useContext(CommandContext);
	const [topCommands, setTopCommands] = useState<ICommand[]>([]);
	useEffect(() => {
		setTopCommands(getTopCommand());
	}, []);
	return (
		<div>
			{topCommands.map((c, i) => {
				return (
					<div key={`top-comment-${i}`}>
						<h1>{c.commandName}</h1>
						<p>Like: {c.like}</p>
					</div>
				);
			})}
		</div>
	);
};
