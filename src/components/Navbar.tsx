import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav>
			<Button>
				<Link to='commands'>Commands</Link>
			</Button>
			<Button>
				<Link to='new-command'>New command</Link>
			</Button>
			<Button>
				<Link to='top-command'>Top command</Link>
			</Button>
		</nav>
	);
};
