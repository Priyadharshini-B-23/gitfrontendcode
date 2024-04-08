
import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Footer () {
  return (
    <footer className='bg-secondary text-content-center'>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0 ' >
          <div className='text-center'>
           <h5 >Location</h5>
           <p>Gandhi Street</p>
           <p>Chennai,Tamilnadu-607105</p>
          </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0' >
          <div className='text-center'>
           <h5>Working Hours</h5>
           <p>Mon-Fri : 9:00 = 10:00PM</p>
           <p>Saturday : 10:00 = 8:30PM</p>
           <p>Sunday : 12:00 = 5:00PM</p>
          </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4 mb-lg-0' >
          <div className='text-center'>
           <h5>Follow Us</h5>
           <p>We here for you</p>
          
          <p  className='text-center'>
          <i class="bi bi-facebook"></i><br></br>
          <i class="bi bi-twitter"></i><br></br>
          <i class="bi bi-instagram"></i><br></br>
          <i class="bi bi-youtube"></i><br></br>
          </p>
         
           
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer