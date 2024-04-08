import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from "../../assets/about/salad.png";
import Delivery from '../../assets/about/delivery-bike.png'



//Moke Data Cards

const mockData =[
    {
        image:Pizza,
        title:"Collabarative",
        paragraph:"Your dream job is waiting!"
    },

    {
        image:Salad,
        title:"Team Building",
        paragraph:"Connecting Talents"
    },

    {
        image:Delivery,
        title:"Professional",
        paragraph:"Its is time for you to take your career to the next level"
    },
    
];

function Section2 () {
  return (
    <>
    <section className='about_section' >
      <Container>
        <Row>
            <Col lg={{span:8,offset:2}} className='text-center' >  
            <h2>Trust us! We will build your success</h2>
            <p>Listing for a career change? Browse our job listings now!</p>
            </Col>
        </Row>
      </Container>
    </section>

    <section className='about_wrapper' >
        <Container>
            <Row className='justify-content-md-center' >
             {mockData.map((cardData,index)=>(
                <Col md={6} lg={4} className='mb-4 mb-md-0' key={index} >
                 <div className='about_box text-center' >
                  <div className='about_icon' >
                   <img
                   src={cardData.image}
                   className='img-fluid'
                   alt="icon"
                   />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                 </div>
                 </Col>
             ))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section2