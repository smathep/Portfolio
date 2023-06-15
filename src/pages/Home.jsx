import React from "react"
// import App from "../App"
// import Navbar from "../Navbar"
// import ReactDOM from 'react-dom/client';
export default function Home(){
    return (
        // <div><p>TestHome</p></div>
        <div>
            {/* <Navbar /> */}
            {/* <h1>Home</h1> */}
            {/* <Navbar/> */}
            {/* <div id="root"></div> */}
            <div id="content">

                <br />
                {/* <h1 style={{"text-align": "center", "background-color": "var(--purple)", "border": "20px solid var(--purple)"}}>Hello! My name is Patrick Smathers</h1> */}
                <h1 style={{"text-align": "center", "marginTop":"20px", "marginBottom":"20px"}}>Hello! My name is Patrick Smathers</h1>
                
                
                <br /><br />
                {/* <!-- mags suggests using Flex to get better styling --> */}
                <div style={{"display": "inline-block"}}> 
                    <img className='pictureBorder' src="./assets/index/portrait.jpeg" alt="Patrick Smathers" width="25%" style={{"float": "right", "marginLeft": "100px"}} />
                    <h2>About Me</h2>
                    <p>
                        I graduated from Clemson Univeristy with a Bachelors of Science in Computer Science in May 2023. I am currently working as a Software Developer at <a id="links" href="https://www.lpl.com">LPL Financial</a>. In my free time I enjoy running, photography, and playing video games. Feel free to look around this site to learn more about me, my projects, or look at the some of the pictures I've taken!
                    </p>

                    <br/><br/><br/>

                    <h2>My Skills</h2>
                    <p>
                        For languages, I have experience in Java, C++, and C. I also have worked in HTML, CSS (this website was originally built from scratch this way), Python, SQL, React (the current version of this website), and C#/.NET. 
                        For more details on languages, frameworks, and tools I am familar with, check out the <a id="links" href="/resume">Resume</a> page.
                    </p>
                </div>

                {/* <div style="display: inline-block;">
                </div> */}
        
                <div style={{"align-items": "center", "text-align": "center"}}>
        
                    <h2>Links:</h2>
                    <p>
                        <a id="linkIcon" href="mailto:patrick@patricksmathers.com"> <img src="./assets/resume/email_icon.png" style={{"vertical-align": "middle", "width": "8%"}}/> </a> 
            
                        <a id="linkIcon" href="https://www.linkedin.com/in/patrick-smathers/"> <img src="./assets/resume/LI-In-Bug.png" width="8%" style={{"vertical-align": "middle", "margin-left": "5%", "margin-right": "4%"}}/> </a>
            
                        <a id="linkIcon" href="https://github.com/smathep/"> <img src="./assets/resume/GitHub-Mark-Light-120px-plus.png" width="7%" style={{"vertical-align": "middle"}}/> </a>
                    </p>
                </div>
            </div>
        </div>

    )
}
// export default Home