import React from "react"
// import App from "../App"
// import Navbar from "../Navbar"
// import ReactDOM from 'react-dom/client';
export default function Home(){
    return (
        <div>
            <div id="content">

                <br />
                <div style={{"display": "inline-block", "marginTop":"20px"}}>
                    <h1 style={{float: "left",  "text-align": "left", "marginBottom":"20px"}}>Hello There! My name is Patrick</h1>
                    <div style={{"align-items": "right", "text-align": "right"}}>
            
                        {/* <h2>Links:</h2> */}
                        <p>
                            <a id="linkIcon" href="mailto:patrick@patricksmathers.com"> <img src="./assets/resume/email_icon.png" style={{"vertical-align": "middle", "width": "5%"}}/> </a> 
                
                            <a id="linkIcon" href="https://www.linkedin.com/in/patrick-smathers/"> <img src="./assets/resume/LI-In-Bug.png" width="5%" style={{"vertical-align": "middle", "margin-left": "3%", "margin-right": "2%"}}/> </a>
                
                            <a id="linkIcon" href="https://github.com/smathep/"> <img src="./assets/resume/GitHub-Mark-Light-120px-plus.png" width="4%" style={{"vertical-align": "middle"}}/> </a>
                        </p>
                    </div>
                </div>
                
                <br /><br /><br />
                <div style={{"display": "inline-block"}}> 
                    <img className='pictureBorder' src="./assets/index/portrait.jpeg" alt="Patrick Smathers" width="20%" style={{"float": "right", "marginLeft": "100px", "borderRadius": 300}} />
                    <h2>About Me</h2>
                    <p>
                        I'm a software developer at <a id="links" href="https://www.lpl.com">LPL Financial</a> currently based in Clemson, South Carolina. I recently graduated from Clemson University with a B.S. in Computer Science. In my spare time, I enjoy running, photography, playing video games, and working on some personal projects (like this website!)

                        <br/>
                        <br/>

                        This website is just a fun way for me to show some of my projects and hobbies and work on something technical outside of my job, so feel free to look around and check out some of the things I've done!
                        <br/>
                        {/* I graduated from Clemson Univeristy with a Bachelors of Science in Computer Science in May 2023. I am currently working as a Software Developer at <a id="links" href="https://www.lpl.com">LPL Financial</a>. In my free time I enjoy running, photography, and playing video games. Feel free to look around this site to learn more about me, my projects, or look at the some of the pictures I've taken! */}
                    </p>

                    

                    {/* <h2>My Skills</h2>
                    <p>
                        For languages, I have experience in Java, C++, and C. I also have worked in HTML, CSS (this website was originally built from scratch this way), Python, SQL, React (the current version of this website), and C#/.NET. 
                        For more details on languages, frameworks, and tools I am familar with, check out the <a id="links" href="/resume">Resume</a> page.
                    </p> */}
                </div>                
            </div>
        </div>

    )
}
// export default Home