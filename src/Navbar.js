import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import './media.css'; 
// class Menu extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    // render(){
    //     return (
    //         <Navbar bg="dark" variant="dark">
    //             <Container>
    //                 <Navbar.Brand href="#home">Patrick Smathers</Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                 <Navbar.Collapse id="basic-navbar-nav">
    //                     <Nav className="me-auto">
    //                         {/* Test */}
    //                         <Nav.Link href="#home">Home</Nav.Link>
    //                         <Nav.Link href="./resume.html">Resume</Nav.Link>
    //                         <Nav.Link href="./projects.html">Projects</Nav.Link>
    //                         <Nav.Link href="./photography.html">Photography</Nav.Link>
    //                         {/* <Nav.Link href="#link">Link</Nav.Link> */}
    //                     </Nav>
    //                 </Navbar.Collapse>
    //             </Container>
    //         </Navbar>
            // <ul>
            //     <li><a href="./index.html">Home</a></li>
            //     <li><a href="./resume.html">Resume</a></li>
            //     <li><a href="./projects.html">Projects</a></li>
            //     <li><a href="./photography.html">Photography</a></li>
            // </ul>
//         );
//     }
// }

function Menu(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Patrick Smathers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="resume">Resume</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        <Nav.Link href="photography">Photography</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Menu;