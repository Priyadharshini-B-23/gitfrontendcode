

import React, { useState, useEffect } from "react";
import { Container, Form, Card, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import {Link} from 'react-router-dom'
 
function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
 
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:44354/api/JobSeekerSignup`);
     
        const filteredResults = response.data.filter(jobs =>
          jobs.jobSeekerQualification.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
 
    fetchData();
  }, [searchTerm]);
 
  return (
    <Row>
      <Col md={9} xs={9}>
        <Container className="leave-container">
          <Row className="search">
            <Col></Col>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Candidate Here..."
                  onChange={handleSearchChange}
                  value={searchTerm}
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Col></Col>
          </Row>
          <br/>
          <Row>
            {searchResults.map((jobs, index) => (
              <Col key={index} md={4}>
                <Card className="mb-4">
                  <Card.Body>
                
                    <Card.Title>{jobs.firstName}</Card.Title>
                    <Card.Text>{jobs.lastName}</Card.Text>
                    <Card.Text>{jobs.jobSeekerEmailId}</Card.Text>
                    <Card.Text>{jobs.qualification}</Card.Text>
                    <Card.Text>{jobs.experience}</Card.Text>
                    <Card.Text>{jobs.jobSeekerPhoneNumber}</Card.Text>
                    <Card.Text>{jobs.jobSeekerQualification}</Card.Text>
                    <Button variant="danger">
                      <DeleteForeverOutlinedIcon/> 
                    </Button>
                    {/* <button>
                    <Link to={`/applyjob`}  className="btn btn-primary sm">Apply</Link>
                    </button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
 
export default SearchForm;