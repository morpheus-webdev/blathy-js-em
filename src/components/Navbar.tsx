import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex flex-row flex-nowrap items-center gap-8 bg-blue-400 h-16 p-8'>
			<Button>
				<Link className='text-white text-4xl' to='/tasks'>
					Tasks
				</Link>
			</Button>
			<Button>
				<Link className='text-white text-4xl' to='/new-task'>
					New task
				</Link>
			</Button>
		</nav>
	);
};

export default Navbar;
