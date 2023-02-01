import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  faPython,
  faGitlab,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faC, faCode } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I'm a Software Engineer with years of experience building web-based applications, 
and tools for finance and security. I hold a First Class (Honours) Bachelor’s Degree in 
Computer Science and a Distinction National Diploma’s Degree in Data Processing . I with HTML, CSS, Javascript, Phython, Java, Springboot,
MySql, Git, Nestjs and React.js.</p>
          <p>
          I am a skilled full-stack developer and open to opportunities that would enable me work on diverse projects and support the vision of the company to deliver exceptional service without compromising standards. 
          </p>
          <p align="LEFT">
            I'm confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          {/* <p>
            If I need to define myself in one sentence that would be a zealous
            lady, a fashion fanatic,
            food lover, and tech-obsessed!!!
          </p> */}
        </div>

        <div className="stage-cube-cont">
        <div className='title'>Front-end Developer </div>
          <div className="cubespinner">
          <div className="face1">
              <FontAwesomeIcon icon={faCode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        <div className="stage-cube-cont2">
        <div className='title'>Back-end Developer </div>
        <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faC} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGithub} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitlab} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About