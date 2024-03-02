import React from 'react'

const Content = () => {
  return (
    <div>
        <section id="about" class="container-fluid text-white" style={{padding: "100px 20px"}}>
            <div class="card btn mt-4 p-5 bg-opacity-50 bg-black text-white rounded">
                <h1 class="">About Me!</h1>
                <p>I am Mohamed Rasith from Koothanallur, Thiruvarur District.</p>
            </div>
        </section>
        <section id="project" class="container-fluid" style={{padding:"100px 20px"}}>
            <div class="card btn mt-4 p-5 bg-opacity-50 bg-black text-white rounded">
                <h1>Projects</h1>
                <p>I have done many projects during my college.</p>
            </div>
        </section>
        <section id="contact" class="container-fluid text-white" style={{padding: "100px 20px"}}>
            <div class="card btn mt-4 p-5 bg-opacity-50 bg-black text-white rounded">
                <h1>Contact Me</h1>
                <p>Click the following link!</p>
            </div>
        </section>
    </div>
  )
}

export default Content