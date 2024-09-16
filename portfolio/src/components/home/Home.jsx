import React from 'react'
import "./home.css"
import myPic from "../../assets/myPic.png"
import { Typewriter } from 'react-simple-typewriter'
import {Link} from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
const Home = () => {
  return (
    <div className='home' id="home" >
      <div className="left">
        <h3>Hello, It's Me</h3>
        <h1>Kuldeep Agrahari</h1>
        <h2 style={{ marginBottom:"3vh", fontWeight: 'normal' }}>
        And I'm a {' '}
        <span style={{ color: 'skyblue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'MERN Stack Developer', 'Problem Solver']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
        </span>
      </h2>
      <p style={{fontSize:"13px"}}>Lorem ipsum dolor,Lorem ibcaecati atque, saepe odit ducimus quaerat. Praesentium, consectetur tenetur! perspiciatis possimus reprehenderit ut perferendis nihil.cusantium voluptatem asperiores ducimus! Beatae, unde.</p>
      <div className="social-links">
        <Link to=""><FaGithub /></Link>
        <Link to=""><ImLinkedin/></Link>
        <Link to=""><FaSquareXTwitter/></Link>
      </div>
      <Link className='cv-btn'>Download CV</Link>
      </div>
     
      <div className="right">
        <div className="pic">
        <img src={myPic} alt="" style={{width:"280px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Home
