import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './NavBar/NavBar';

import HomePage from './pages/HomePage/HomePage';
import EventsPage from './pages/EventsPage/EventsPage';
import AboutPage from './pages/AboutPage/AboutPage';

import ErrorPage from './pages/ErrorPage/ErrorPage';


import './index.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<NavBar />
			
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/about" element={<AboutPage />} />
					
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
				
		</Router>
	</React.StrictMode>,
)
