import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import App from '../App';
// import Navbar from '../Navbar';
// import reportWebVitals from '../reportWebVitals';

export default function Resume(){
    return (
        <div>
          <div id="content" >
            
            {/* <br/> */}
            <br/>
            <h1>My Resume</h1>
            <h2>Contact Info and Links</h2>
            
            <div class="table" className='centered'>
                <ul id="horizontal-list">
                    <li><img src="./assets/resume/email_icon.png" width="50px" style={{"vertical-align": "middle", "margin-right": "3px"}}/> <a id="links" href="mailto:patrick@patricksmathers.com">patrick@patricksmathers.com</a></li>
                    <li><img src="./assets/resume/LI-In-Bug.png" width="50px" style={{"vertical-align": "middle", "margin-right": "1px"}}/> <a id="links" href="https://www.linkedin.com/in/patrick-smathers/">patrick-smathers</a></li>
                    <li><img src="./assets/resume/GitHub-Mark-Light-120px-plus.png" width="50px" style={{"vertical-align": "middle", "margin-right": "1px"}}/> <a id="links" href="https://github.com/smathep/">smathep</a></li>
                </ul>
            </div>
            <p className='centered'><a id="links" href="./assets/resume/Resume - Patrick Smathers.pdf">For a downloadable version, click here!</a></p>
            
            <br/>
            <h2>Education <img src="./assets/resume/Paw_RGB__Orange.png" width="50px" style={{"vertical-align": "middle", "padding-bottom": "2px"}}/></h2>  
            
            <p style={{"float": "left"}}>
                Clemson University<br/>
                B.S. in Computer Science - GPA 3.84
            </p>
            <p style={{"float": "right"}}> 
                Clemson, SC <br></br>
                May 2023
            </p>
            
            <br/>
            <br/>
            <br/>
            <h2>Work Experience</h2>
            
            <h3>LPL Financial</h3>
            <p>
                Technology Intern - Software Devlopment (June 2022 - August 2022)
                <br />
                <ul>
                    <li>Worked on a team maintaining and improving a system for financial investors to view accounts and contributions.</li>
                    <li>Created and contributed to APIs in C# to enable investors to better manage their money.</li>
                </ul>
            </p>
            <br />
            
            <h3 >Clemson University - School of Computing <img src="./assets/resume/Paw_RGB__Orange.png" width="50px" style={{"vertical-align": "middle"}}/> </h3>
            <p>
                Mobile App Developer - Full Stack (January 2023 - May 2023)
                <br />
                <ul>
                    <li>Worked with Clemson's Cooperative Extension and College of Agriculture, Forestry, and Life Sciences to develop iOS and Android apps for their WalkSC Program.</li>
                    <li>Built an app in React Native that has feature parity across platforms.</li>
                    <li>Setup and maintained cloud infrastructure on AWS to run an API and Database, and manage DNS records.</li>
                    <li>Created detailed technical documentation on how to setup the backend infrastructure from scratch and detailed app processes for future developers.</li>
                </ul>
            </p>
            <p>
                Lead Teaching Assistant (January 2022 - May 2022)
                <br />
                <ul>
                    <li>Created and scheduled the in-person office hours rooms.</li>
                    <li>Assisting in presenting and developing new training content for new UTA's to teach important basics.</li>
                    <li>Interviewed potential new UTAs and assisted in assigning UTAs to classes.</li>
                </ul>
            </p>
            <p>
                Teaching Assistant (August 2021 - December 2021)
                <ul>
                    <li>Co-led an introductory CS lab class alongside another TA.</li>
                    <li>Graded assignments and labs to help provide timely feedback on submitted work.</li>
                    <li>Partially automated project testing to speedup unpacking files, compiling, and running tester classes.</li>
                    <li>Worked alongside a team of UTAs to provide support to students outside of lab and lecture during office hours.</li>
                </ul>
            </p>
            <br />
            <h3>Clemson University - Clemson Computing and Information Technology <img src="./assets/resume/Paw_RGB__Orange.png" width="50px" style={{"vertical-align": "middle;"}}/> </h3>
            <p>
                Laptop Support Technician (January 2021 - December 2021)
                <ul>
                    <li>Provided support to students, faculty, and staff regarding laptop software issues and diagnosing hardware issues</li>
                    <li>Trained new student workers in our protocols and procedures</li>
                </ul>
            </p>
            <br />
            <br />
            <h2>Skills</h2>
            <ul>
                <li>
                    Experience with Java (Oracle Certified Associate in Java 7), C++, MacOS, Windows
                </li>
                <li>
                    Exposure to C, Python, HTML/CSS, MySQL, shell scripting, AWS (Route 53, CloudFront, Lambda, S3), Agile Dev., C# 
                </li>
            </ul>
            <br />
            <br />
            <h2>Projects</h2>
            <p>Check out the Projects page for more detail!</p>
            <ul>
                <li><a id="links" href="https://github.com/ClemBotProject/ClemBot">ClemBot</a> - Contributed to a large discord bot, named ClemBot, written in Python and C# and integrating a PostgresSQL DB</li>
                <li><a id="links" href="https://github.com/smathep/Mandelbrot">Mandelbrot</a> - Java program that can render the Mandelbrot set in different resolutions, locations, zoom factors, and utilizing a variable number of threads</li>
                <li><a id="links" href="https://github.com/smathep/GameOfLife">Conway's Game of Life</a> - Created a Life simulation based on Conway's Life in Java that allows user interaction and manipulation</li>
                <li><a id="links" href="https://fractals.tech">Fractals.tech</a> - Group hackathon project where users can create different types of fractals on a website, modify their parameters and appearance, and download the image. Won a category award for using a .tech domain. </li> 
            </ul>
            
            <br />
            <br />
            <h2>Awards/Recognitions</h2>
            <ul>
                <li>Palmetto Fellows and STEM enhancement (August 2020 - Present)</li>
                <li>President's List - Fall 2020; Fall 2021; Spring 2022</li>
                <li>Dean's List - Spring 2021</li>
                <li>CUHackit Hackathon Award (Team Project) - Best Use of a .tech Domain (<a id="links" href="http://fractals.iapetus11.me">https://fractals.tech</a> - Has been updated and maintined by my friend on his website!)</li>
                <li>Inducted into to Upsilon Pi Epsilon - International Computer Science Honors Society - Spring 2022</li>
                <li> <u><abbr title="Hispanic Scholarship Fund">HSF</abbr></u> Scholar Designation: 2021; 2022 </li>
                <li>1 of 100 HSF STEM Summit Invitees - 2022</li>
            </ul>
            
            <br />
            <br />
            <h2>Activites</h2>
            <ul>
                <li>Clemson Photography Club: Spring 2021 - Present</li>
            </ul>
            
            <br />
            <br />
            <h2>Interests</h2>
            <ul>
                <li>Photography</li>
                <li>Programming</li>
                <li>Technology</li>
                <li>Video Games</li>
                <li>Music</li>
                <li>Science</li>
                
            </ul>
          </div>
        </div>
    )
}
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
 
// export default Resume