
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';




function Section3 () {
  return (
   <section  className='menu_section' >
  <Container>
    <Row>
        <Col  lg={{span:8, offset:2}} className='text-center mb-5'>
        <h2>Find the career you deserve</h2>
        <p className='para' >No matter what happens,this is a great opportunity for learning and growth.Best wishes!</p>
        </Col>
    </Row>

  

    
     <Row className='pt-5' >
       <Col sm={6} lg={6}>
        <div  className='ads_box ads_img1 mb-5 mb-md-0'>
          <h4 className='mb-0' >CONNECTING TALENT WITH</h4>
          <h5 >OPPORTUNITIES</h5>

        </div>
       </Col>

       <Col sm={6} lg={6}>
        <div  className='ads_box ads_img2'>
          <h4 className='mb-0' >WE CAN HELP</h4>
          <h5 >YOU GROW</h5>
     
        </div>
       </Col>
     </Row>

  </Container>
   </section>
  );
}

export default Section3;