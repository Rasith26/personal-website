import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GitHub, LinkedIn, Instagram, Gmail} from '../../Images';

const Content = () => {

    const navigate = useNavigate();

  return (
    <div>
        <section id="about" class="container-fluid text-white" style={{padding: "100px 20px"}}>
            <div class="card bg-black text-white p-3">
                <h1 class="">About Me!</h1>
                <p class="fs-5">
                    I am Mohamed Rasith from Koothanallur, Thiruvarur District, Tamil Nadu.
                    Did my schooling from Oxford Matriculation Higher Secondary School, Koothanallur, Thiruvarur District, Tamil Nadu.
                    Completed my bachelor's degree in Computer Science Engineering from Aalim Muhammed Salegh College of Engineering.
                    I am a fresh graduate, Currently looking for a job in software development field. 
                    Having skills in Object Oriented Programming languages like Java, C++ and Python. 
                    Also have skills in HTML, CSS, JavaSript, TypeSript and PHP.
                </p>
                <br/>
                <p class="fs-5">
                    Currently working on React JS technology for web development and Netlify for deployment.
                    Developed this website using React JS and Bootstrap. And deployed it in Netlify to make it accessible for everyone. 
                    I have interest in software development roles like Application Developer, Web Developer and Game Developer. 
                    Contact me for any opportunities that i can pursue.  Click "Know More" for further details.
                </p>
                <div class="text-end know"
                onClick={() => {
                    navigate("/about");
                }}>
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
            </div>
        </section>
        <section id="project" class="container-fluid" style={{padding:"100px 20px"}}>
            <div class="card bg-black text-white p-3">
                <h1>Projects</h1>
                <p class="fs-5">
                    I have done some projects during my college days which includes projects from development fields like 
                    Web development and Application development. Here is the overview of some projects, Click "Know More" 
                    for further details.
                </p>
                <br/>
                <p class="fs-5" style={{textIndent: "0px"}}>
                    <b>1. AI based personalized medical ChatBot: </b>Created a Medical Chatbot using Python which 
                    provides information about medical resources and answer user queries related to healthcare. 
                    Trained the AI model using Tensorflow and NLTK Libraries. Created GUI using Tkinter library.
                </p>
                <br/>
                <p class="fs-5" style={{textIndent: "0px"}}>
                    <b>2. Signs with Smart Connectivity for better Road Safety: </b>Completed the 
                    Experiential-Project Based Learning(IOT) on ICTAcademy powered by IBM Developer Skills Network. 
                    The aim is to change the static display boards on the roads to digital sign boards which dynamically 
                    changes it's display message based on the surrounding situation. Created a prototype using IBM Cloud, 
                    Node-Red, Wokwi and MIT App Inventor.
                </p>
                <br/>
                <p class="fs-5" style={{textIndent: "0px"}}>
                    <b>3. Student Database Management System: </b> Created a system for students where they can 
                    view and edit their academic information and interact with admin in feed and help section. 
                    Admin can manage the details of the student and interact with the students. Created this 
                    website using PHP and implemented using Xampp and PostgreSQL.
                </p>
                <div class="text-end know"
                onClick={() => {
                    navigate("/projects");
                }}>
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </div>
            </div>
        </section>
        <section id="contact" class="container-fluid text-white" style={{padding: "100px 20px"}}>
            <div class="card bg-black text-white p-3">
                <h1>Contact Me</h1>
                <p class="fs-5">
                    Reach me out if you have any queries. Message me for any opportunities that I can pursue.
                    Follow me on social media platforms. Click "Know More" 
                    to send me a message. Click the following link to follow!
                </p>
                <br/>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 my-3">
                            <a class="contact-link" href='https://github.com/Rasith26' style={{paddingLeft: "40px", paddingRight: "40px"}}>
                                <img src={GitHub} class="rounded" alt="GitHub" style={{width:"30px", height: "30px"}}/>
                                GitHub
                            </a>
                        </div>
                        <div class="col-sm-6 my-3">
                            <a class="contact-link" href='https://www.linkedin.com/in/mohamed-rasith-b47565247' style={{paddingLeft: "32px", paddingRight: "32px"}}>
                                <img src={LinkedIn} class="rounded" alt="GitHub" style={{width:"30px", height: "30px"}}/>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 my-3">
                            <a class="contact-link" href='https://www.instagram.com/rashith__26/' style={{paddingLeft: "25px", paddingRight: "25px"}}>
                                <img src={Instagram} class="rounded" alt="GitHub" style={{width:"30px", height: "30px"}}/>
                                Instagram
                            </a>
                        </div>
                        <div class="col-sm-6 my-3">
                            <a class="contact-link" href='mailto:rashithks@gmail.com' style={{paddingLeft: "40.5px", paddingRight: "40.5px"}}>
                                <img src={Gmail} class="rounded" alt="GitHub" style={{width:"40px", height: "30px"}}/>
                                Gmail
                            </a>
                        </div>
                    </div>
                </div>
                <div class="text-end know"
                onClick={() => {
                    navigate("/contact");
                }}>
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