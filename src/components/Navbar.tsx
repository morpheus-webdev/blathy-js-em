import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<Button>
				<Link to='/tasks'>Tasks</Link>
			</Button>
			<Button>
				<Link to='/new-task'>New task</Link>
			</Button>
		</nav>
	);
};

export default Navbar;
