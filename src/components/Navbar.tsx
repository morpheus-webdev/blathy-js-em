import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='bg-pink-500 h-24 w-full flex flex-row flex-nowrap items-center gap-6'>
			<Button>
				<Link className='navbar-link' to='commands'>
					Commands
				</Link>
			</Button>
			<Button>
				<Link className='navbar-link' to='new-command'>
					New command
				</Link>
			</Button>
			<Button>
				<Link className='navbar-link' to='top-command'>
					Top command
				</Link>
			</Button>
		</nav>
	);
};
