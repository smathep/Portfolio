import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import App from './App';

export default function Index(){
    return (
		// <div></div>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />} />
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="resume" element={<Resume />} />
					<Route path="projects" element={<Projects />} />
					<Route path="photography" element={<Photography />} />
					<Route path="*" element={<NotFound />} />
				<Route/>
			</Routes>
		</BrowserRouter>
	)
}
