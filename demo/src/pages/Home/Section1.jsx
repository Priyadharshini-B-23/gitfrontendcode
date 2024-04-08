import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Burger from "../../assets/menu/ten.png";
import {Link} from 'react-router-dom';


function Section1 () {
  return (
    <section className='hero_section'  >
     <Container>
        <Row>
            <Col lg={7} className='mb-5 mb-lg-0' >
                <div className='position:relative' >
                   <img src={Burger} className='fluid' alt="Hero" />
                 
                </div>
            </Col>


            <Col lg={5} >
            <div className='hero_text text-center' >
            <h2 className='text-white' >Get Your New </h2>
              <h1 className='text-white' >Dream Job </h1>
              <h2 className='text-white' >Today</h2>
              <p className='text-white pt-2 pb-4' >Do your best.Your best is better than anyone else around</p>
          
            </div>
            </Col>

        </Row>
     </Container>
    </section>
  )
}

export default Section1