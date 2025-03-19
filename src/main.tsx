import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { TaskContextProvider } from './contexts/TaskContext.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<TaskContextProvider>
			<App />
		</TaskContextProvider>
	</BrowserRouter>
);

//3 helyen kell implementálni react-router-dom ot, hogy működjön
//1. Wrapper megadása main.tsx-ben
//2. App.tsx-ben az útvonalak megadása
//3. Navbar-ban gombok(Link) hozzáadása az útvonalhoz.
