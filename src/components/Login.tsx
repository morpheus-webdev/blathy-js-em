import { useState } from 'react';
import { defaultUser, IUser } from '../util/util';
import { Button, Checkbox, TextField } from '@mui/material';

export const Login = () => {
	const [user, setUser] = useState<IUser>(defaultUser);

	/* useEffect(() => {
		console.log(user);
		if (user.name !== '') {
			console.log("'user.name' megváltozott");
		}
		else if (user.password !== '') {
			console.log("'user.password' megvátozott");
		}
	}, [user]); */

	function handleLogin() {
		console.log(user);
	}

	return (
		<div>
			<TextField
				placeholder='Username...'
				onChange={(e) => setUser({ ...user, name: e.target.value })}
			/>
			<TextField
				placeholder='Password...'
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<Checkbox
				onChange={(e) => setUser({ ...user, isAdmin: e.target.checked })}
			/>
			<Button variant='outlined' onClick={handleLogin}>
				Login
			</Button>
		</div>
	);
};
