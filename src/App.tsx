import { useEffect, useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			{/* <Login /> */}
			<Navbar />
			<Routes>
				<Route path='/tasks' element={<Tasks />} />
				<Route path='/new-task' element={<NewTask />} />
			</Routes>
		</>
	);
}

export default App;
