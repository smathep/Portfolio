import React from 'react';
import ReactDom from 'react-dom/client';
import Navbar from '../Navbar';
import App from '../App';
export default function Projects(){
    return (
        // <div>Thist</div>
        <div>
            {/* <Navbar /> */}
            <a id="linkIcon" href="https://github.com/smathep/"> <img src="./assets/resume/GitHub-Mark-Light-120px-plus.png" width="50px" style={{"vertical-align": "middle", "margin": "10px"}}/> </a>
            <div id="content">

                <div>
                    <h2>Mandelbrot</h2>
                    <p>
                        This is a multithreaded Java program that allows you to save an image of the Mandelbrot set.
                        The user can choose the coordinates of the set to center around, the zoom level, and the number of threads to use in the rendering process. 
                        The code and documentation for this app is available on <a id="links" href="https://github.com/smathep/Mandelbrot">GitHub</a>.
                        <br/>
                        <img id="projectPictures" src="./assets/projects/1xZoom4K.png" alt="Mandelbrot set zoomed out in 4K"/> 
            
                        <img id="projectPictures" src="./assets/projects/Zoom4K.png" alt="Zoomed in mandelbrot set in 4K"/>
            
                        <img id="projectPictures" src='./assets/projects/DeepZoom4K.png' alt="Deep zoomed mandelbrot set in 4K"/>
                    </p>
                </div>
                <br/>
                <div>
                    <h2>Fractals.tech</h2>
                    <p>
                        Fractals.tech came about during Clemson's 2022 CUHackit hackathon as a team submission. Our project won the award for best use of a .tech domain at the event. Through this site, you can make several different types of fractals, modify the variables of the equation used to create them, and download the image to your machine. The front end website is written in CSS and HTML, Python for the math and image generation, and a FastAPI written in Python to connect them together. You can find it at <a id="links" href="https://fractals.tech">fractals.tech</a>, hosted on my teammate Milo's website.
                    </p>
                </div>
                <div>
                    <h2>Portfolio Website</h2>
                    <p>
                        This website was written in HTML and CSS as a way to showcase and present my resume and projects, learn  those two languages, and also learn how to use some services on AWS, such as Amazon S3, Route 53, Lambda, and CloudFront. The source code for this website is available on <a id="links" href="https://github.com/smathep/Portfolio">GitHub</a>.
                    </p>
                </div>
                <br/>
                <div>
                    <h2>Conway's Game Of Life</h2>
                    <p>
                        This is a Java program from high school based on John Conway's Game of Life. The user can choose from different preset game board sizes, as well as different preset gameboard setups like boards with oscillators, still lifes, gliders, spaceships, empty grids for customization, or random boards. The user can then control the speed at which the simulaiton runs, pause running, click to change a cell's status, and step through simulation rounds. The code and documentation for this app is available on <a id="links" href="https://github.com/smathep/GameOfLife">GitHub</a>.
            
                        <img style={{"width": "40%"}} id="projectPictures" src="./assets/projects/GoF-oscillators-small.png"/>
                        <img style={{"width": "40%"}} id="projectPictures" src="./assets/projects/GoF-random-large.png"/>
                        <img style={{"width": "60%"}} id="projectPictures" src="./assets/projects/GoF-random-commands.png"/>
                    </p>
                </div>
            </div>
        </div>
    )
}