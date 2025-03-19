import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

//3 helyen kell implementálni react-router-dom ot, hogy működjön
//1. Wrapper megadása main.tsx-ben
//2. App.tsx-ben az útvonalak megadása
//3. Navbar-ban gombok(Link) hozzáadása az útvonalhoz.
