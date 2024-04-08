import React from 'react';
import { Container, Row,Col, Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Section5 () {
  return (
   <section className='contact_section'>
    <Container>
        <Row className='justify-content-center'>
          <Col sm={8} className='text-center'>
          <h4>We Guarentee</h4>
          <h2>For your future!</h2>
          <p>Place where opportunities are found</p>
          <Link to="/" className="btn btn_red px-4 py-2 rounded-0" >
          Call: 999-888-7777
          </Link>
          </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Section5