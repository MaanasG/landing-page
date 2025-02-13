import React from 'react'
import Landing from '../components/Landing/Landing.js'
import Experience from "../components/Experience/Experience.js"
import Divider from "../components/Divider/Divider.js"
import AboutMe from "../components/About Me/AboutMe.js"
import Education from "../components/Education/Education.js"
import Skills from "../components/Skills/Skills.js"

export default function Main() {
    return(
        <div>
            <Landing />
            <Divider />
            <Experience />
            <Divider />
            <AboutMe />
            <Divider />
            <Education />
            <Divider />
            <Skills />
            <Divider />
        </div>
    )
}