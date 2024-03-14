import React from 'react'
import {Project1, Project2, Project3} from '../../Images'
import {Cpp, Python, JSON, Tensorflow, NLTK, NumPy, Tkinter, Anaconda, Spyder,
IBMIOT,IBMCloud, IBMWatson, NodeRed, MITApp, OpenWeather, Wokwi, PythonIdle, 
HTML, CSS, JavaScript, PHP, MySQL, Xampp, PostgreSQL, VSCode} from '../../Images/Tech-logo'

const Content = () => {
  return (
    <div>
        <div class="container-fluid">
            <div class="container d-flex align-items-center justify-content-center">
                <img src={Project1} class="p1-im rounded" alt="AI based personalized medical ChatBot" data-aos="flip-left"/>
            </div>
            <div class="container">
                <h1 data-aos="fade-up">AI based personalized medical ChatBot</h1>
                <p class="py-2 fs-5" data-aos="fade-up">
                    This project aims to address the challenges of limited access to personalized 
                    medical information and the burden on healthcare providers due to routine inquiries. 
                    By offering a reliable and accessible platform, the chatbot aims to empower individuals 
                    in making informed decisions regarding their health and potentially reduce the strain on 
                    healthcare resources. 
                </p>
                <p class="py-2 fs-5" data-aos="fade-up">
                    The successful implementation of an AI-based personalized medical chatbot could 
                    significantly improve healthcare accessibility, enhance patient outcomes, and 
                    contribute to more efficient healthcare delivery. 
                </p>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Technologies Used: </b></div>
                    <div class="tech-im">
                        <img src={Python} class="rounded my-1 mx-2" alt="Python" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={JSON} class="rounded my-1 mx-2" alt="JSON" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Libraries Used: </b></div>
                    <div class="tech-im pr-0">
                        <img src={Tensorflow} class="rounded my-1 mx-2" alt="Tensorflow" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={NLTK} class="rounded my-1 mx-2" alt="NLTK" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={NumPy} class="rounded my-1 mx-2" alt="NumPy" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={Tkinter} class="rounded my-1 mx-2" alt="Tkinter" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Tools Used: </b></div>
                    <div class="tech-im">
                        <img src={Anaconda} class="rounded my-1 mx-2" alt="Anaconda" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={Spyder} class="rounded my-1 mx-2" alt="Spyder" style={{width:"80px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-dark text-white">
            <div class="container d-flex align-items-center justify-content-center">
                <img src={Project2} class="p2-im rounded" alt="Signs with Smart Connectivity for better Road Safety" data-aos="flip-right"/>
            </div>
            <div class="container">
                <h1 data-aos="fade-up">Signs with Smart Connectivity for better Road Safety</h1>
                <p class="py-2 fs-5" data-aos="fade-up">
                    Smart Traffic Management is a system to monitor and control traffic 
                    signals using sensors to regulate the flow of traffic and to avoid congestion 
                    for a smooth flow of traffic. 
                </p>
                <p class="py-2 fs-5" data-aos="fade-up">
                    Prioritizing traffic like ambulances, police etc. is also one 
                    application comes under smart traffic management. 
                </p>
                <p class="py-2 fs-5" data-aos="fade-up">
                    This project will replace the static boards to smart signed boards that will 
                    change the speed limits according to the weather climate and show diversion 
                    messages if there are accidents in the road and alert messages if there is hospital, 
                    schools or any roadworks. 
                </p>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Technologies Used: </b></div>
                    <div class="tech-im">
                        <img src={Python} class="rounded my-1 mx-2" alt="Python" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={Cpp} class="rounded my-1 mx-2" alt="C++" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Libraries Used: </b></div>
                    <div class="tech-im pr-0">
                        <img src={IBMIOT} class="rounded my-1 mx-2" alt="IBM IOT" style={{width:"70px", height: "50px"}} data-aos="fade-left" />
                        <img src={OpenWeather} class="rounded my-1 mx-2" alt="Open Weather" style={{width:"80px", height: "50px"}} data-aos="fade-left" />
                        <img src={IBMWatson} class="rounded my-1 mx-2" alt="IBM Watson" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
                <div class="text-start px-4 pt-2 pb-4 fs-4">
                    <div><b>Tools Used: </b></div>
                    <div class="tech-im">
                        <img src={IBMCloud} class="rounded my-1 mx-2" alt="IBM Cloud" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={NodeRed} class="rounded my-1 mx-2" alt="Node Red" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={Wokwi} class="rounded my-1 mx-2 bg-light" alt="Wokwi" style={{width:"80px", height: "50px"}} data-aos="fade-left" />
                        <img src={MITApp} class="rounded my-1 mx-2" alt="MIT App Inventor" style={{width:"70px", height: "50px"}} data-aos="fade-left" />
                        <img src={PythonIdle} class="rounded my-1 mx-2" alt="Python Idle" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container d-flex align-items-center justify-content-center">
                <img src={Project3} class="p3-im rounded" alt="Student Database Management System" data-aos="flip-left"/>
            </div>
            <div class="container">
                <h1 data-aos="fade-up">Student Database Management System</h1>
                <p class="py-2 fs-5" data-aos="fade-up">
                    This project aims to help students to track their academic 
                    information through the organization website. This system can be 
                    used as an online student service solution of the institute to 
                    manage the student information. 
                </p>
                <p class="py-2 fs-5" data-aos="fade-up">
                    A student portal project that acts as an online portal between students 
                    and the admin. It contains an admin who can enter details of students. Students 
                    can then login using provided user id, password and view their profile details and 
                    access the information like mark list, attendance history and payment history.
                </p>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Technologies Used: </b></div>
                    <div class="tech-im">
                        <img src={HTML} class="rounded my-1 mx-2" alt="HTML" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={CSS} class="rounded my-1 mx-2" alt="CSS" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={JavaScript} class="rounded my-1 mx-2" alt="JavaScript" style={{width:"60px", height: "60px"}} data-aos="fade-left" />
                        <img src={PHP} class="rounded my-1 mx-2" alt="PHP" style={{width:"60px", height: "50px"}} data-aos="fade-left" />
                        <img src={MySQL} class="rounded my-1 mx-2" alt="MySQL" style={{width:"70px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
                <div class="text-start px-4 py-2 fs-4">
                    <div><b>Tools Used: </b></div>
                    <div class="tech-im">
                        <img src={VSCode} class="rounded my-1 mx-2" alt="VSCode" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={Xampp} class="rounded my-1 mx-2" alt="Xampp" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                        <img src={PostgreSQL} class="rounded my-1 mx-2" alt="PostgreSQL" style={{width:"50px", height: "50px"}} data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content