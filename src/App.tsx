import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			{/* <Login /> */}
			<Navbar />
			<Routes>
				<Route path='/tasks' element={<Tasks />} />
				<Route path='/new-task' element={<NewTask />} />
			</Routes>
		</div>
	);
}

export default App;
