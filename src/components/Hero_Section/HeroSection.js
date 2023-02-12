import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import "./Hero_Section.css"
import hero_image from "../../assets/images/hero_image.png"
const HeroSection = () => {
    return(
        <section className='hero__section' id="home">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero_content'>
                            <p className='mb-3'>Welcome to My Portfolio</p>
                            <h2 className='hero_title mb-4'>I'm Dandigam Mohan</h2>
                            <p>Pursuing a Master's degree focused in Computer Science from California State University - East Bay. 
Also having 5+ years of professional experience in design, development, testing, deploying and maintaining the highly scalable software projects.</p>
                            <div className='mt-4 hero_btns d-flex align-items-center gap-4'>
                                <button className='btn hire-btn'>
                                    <a href="#">Hire Me</a>
                                </button>
                                <button className='btn contact-btn'>
                                   Contact
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                       <div className="hero_img">
                            <img src={hero_image} alt="" className='w-100'/>
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default HeroSection