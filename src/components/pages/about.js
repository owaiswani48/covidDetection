import React from 'react'

function About() {
    return (
        <div className="about">
                    <div class="about-section">
        <h1>Covid Tracking And Resources</h1>
        <h4>We are the Students of ISLAMIC UNIVERSITY OF SCIENCE AND TECHNOLOGY AWANTIPORA J&K</h4>
        <h4>We are currently.... </h4>
       <br/>
      </div>
      
      <h1>Our Team</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="container">
              <h2>Mohammad Arslaan</h2>
              <h2>Owais Bashir</h2>
              <p class="title">CEO & Founders</p>
              <p>Have created this web application</p>
              <p>arslaan007@gmail.com</p>
              <p>owaiswani48@gamil.com</p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046" alt="Arslaan" style={{width:'100px'}} />
            <div class="container">
              <h2>Arslaan</h2>
              <p class="title">Developer</p>
              <p>Some text that describes me.</p>
              <p>arslaan007@gmail.com</p>
              <p>Contact:821639869</p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046" alt="Owais" style={{width:'100px'}} />
            <div class="container">
              <h2>Owais</h2>
              <p class="title">Developer</p>
              <p>Some text that describes me.</p>
              <p>owaiswani48@gamil.com</p>
              <p>Contact:09709707</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default About
