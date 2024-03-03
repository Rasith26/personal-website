import React from 'react'
import { useNavigate } from 'react-router-dom'

const Content = () => {

    const navigate = useNavigate();

  return (
    <div>
        <section class="container-fluid text-white" style={{padding: "100px 20px"}}>
            <div id="about" class="card btn bg-opacity-75 bg-black text-white rounded" 
            onClick={() => {
                navigate("/about");
            }}>
                <h1 class="">About Me!</h1>
                <p>I am Mohamed Rasith from Koothanallur, Thiruvarur District, Tamil Nadu.
                    Did my schooling from Oxford Matriculation Higher Secondary School, Koothanallur, Thiruvarur District, Tamil Nadu.
                    Completed my bachelor's degree in Computer Science Engineering from Aalim Muhammed Salegh College of Engineering.
                    I am a fresh graduate, Currently looking for a job in software development field. 
                    Having skills in Object Oriented Programming languages like Java, C++ and Python. 
                    Also have skills in HTML, CSS, JavaSript, TypeSript and PHP.
                </p>
                <br/>
                <p>
                    Currently working on React JS technology for web development and Netlify for deployment.
                    Developed this website using React JS and Bootstrap. And deployed it in Netlify to make it accessible for everyone. 
                    I have interest in software development roles like Application Developer, Web Developer and Game Developer. 
                    Contact me for any opportunities that i can pursue.
                </p>
                <div class="text-end">
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
            </div>
        </section>
        <section class="container-fluid" style={{padding:"100px 20px"}}>
            <div id="project" class="card btn bg-opacity-75 bg-black text-white rounded"
            onClick={() => {
                navigate("/projects");
            }}>
                <h1>Projects</h1>
                <p>I have done many projects during my college.</p>
                <div class="text-end">
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
            </div>
        </section>
        <section class="container-fluid text-white" style={{padding: "100px 20px"}}>
            <div id="contact" class="card btn bg-opacity-75 bg-black text-white rounded"
            onClick={() => {
                navigate("/contact");
            }}>
                <h1>Contact Me</h1>
                <p>Click the following link!</p>
                <div class="text-end">
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Content