
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png';

function Section4 (){
  return (
    <>
    <section className='promotion_section' >
    <Container>
        <Row>
            <Col lg={6} className='text-center mb-5 mb-lg-0' >
            <img src={PromotionImage} className='img-fluid' alt="promotion" />
            </Col>

            <Col lg={6} className='px-5' >
            <h2>There is a way to better ---Find It!</h2>
            <p>Explore Exciting Opportunities</p>
            <ul>
                <li><p>It is time for you to take your career to the next level</p></li>
                <li><p>The future depends on waht you do today</p></li>
                <li><p>Optimise is the faith that leads to achivement</p></li>
            </ul>
            </Col>
        </Row>
    </Container>
    </section>
    {/* // BG Parallac scroll */}
    
    <section  className='bg_parallax_scroll'>
      
    </section>
    </>
  )
}

export default Section4