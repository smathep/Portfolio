import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap'
import './App.css';
import App from './App';
import Navbar from './Navbar';
import AppRouter from './AppRouter';
// import reportWebVitals from './reportWebVitals';

export default function Index(){
	return (
		<div>
			<Navbar />
			<AppRouter />
			{/* <BrowserRouter>
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
			</BrowserRouter> */}
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
