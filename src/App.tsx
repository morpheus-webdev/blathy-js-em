import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Commands } from './components/Commands';
import { NewCommand } from './components/NewCommand';
import { TopCommand } from './components/TopCommand';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='commands' element={<Commands />} />
				<Route path='new-command' element={<NewCommand />} />
				<Route path='top-command' element={<TopCommand />} />
			</Routes>
		</div>
	);
}

export default App;
