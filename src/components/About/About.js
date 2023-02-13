import React, { useState } from 'react';
import "./About.css"
import { Container, Row, Col } from 'reactstrap';
import Education from "./Education.jsx";
import Skills from "./Skills"
const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col lg='12' className='mb-3'><h2>About Me</h2></Col>
                    <Col lg='4' md='3'>
                        <div className="about__btns d-flex flex-column align-items-center">
                            <button className="about__btn about__btn-active"
                                onClick={() => setAboutFilter('ABOUT')}>About Me</button>
                            <button className="about__btn"
                                onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                            <button className="about__btn"
                            onClick={() => setAboutFilter('SKILLS')}>Skills</button>
                            <button className="about__btn">Awards</button>
                        </div>
                    </Col>
                    <Col lg='8' md='9'>
                        {aboutFilter==='ABOUT' && <div className="about__content__wraper d-flex gap-5 ">
                            <div className="about__image">
                                <img src="" alt="" className="w-100" />
                            </div>
                            <div className="about__content w-75">
                                <h2>I am Mohan Dandigam</h2>
                                <p>Pursuing a Master's degree focused in Computer Science from California State University - East Bay.
                                    Also having 5+ years of professional experience in design, development, testing, deploying and maintaining the highly scalable software projects</p>
                                <div className="social__links">
                                    <h6>Connect with Me</h6>
                                    <span><a href="#"><i class="ri-facebook-line"></i></a></span>
                                    <span><a href="#"><i class="ri-github-line"></i></a></span>
                                    <span><a href="#"><i class="ri-linkedin-line"></i></a></span>
                                    <span><a href="#"><i class="ri-instagram-line"></i></a></span>
                                </div>
                            </div>
                        </div>}
                        {
                            aboutFilter==='EDUCATION' && <Education/>
                        }
                        {
                            aboutFilter==='SKILLS' && <Skills/>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About