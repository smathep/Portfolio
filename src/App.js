import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Navbar from './Navbar';
import Index from './index';
import Home from './pages/Home';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import AppRouter from './AppRouter';
// import { PLACES }  from './shared/places'

class App extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		// Menu: Menu
	// 	};
	// }

	render(){
		return (
    			<meta http-equiv="Refresh" content="0; url='https://www.linkedin.com/in/matthewperry-dev/'" />
			<div className='App' >
				{/* <Navbar /> */}
				{/* <Home /> */}
				<Index />
				{/* <h1>THISIS A TEST</h1> */}
				{/* <AppRouter /> */}
			</div>
		)
	}
}
		
export default App;
		
