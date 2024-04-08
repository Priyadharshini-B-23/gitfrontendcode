
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
        const response = await axios.get(`https://localhost:44354/api/JobDetails`);
        const filteredResults = response.data.filter(job =>
          job.role.toLowerCase().includes(searchTerm.toLowerCase())
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
                  placeholder="Search Jobs Here..."
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
            {searchResults.map((job, index) => (
              <Col key={index} md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    {/* <Card.Title>
                      <div className="panel-body" style={{width:"350px",borderRadius:"12px"}} id='postImg'>
                        <img src={job.imageUrl} alt={job.title} />
                      </div>
                    </Card.Title> */}
                    <Card.Title>{job.jobName}</Card.Title>
                    <Card.Text>{job.role}</Card.Text>
                    <Card.Text>{job.companyName}</Card.Text>
                    <Card.Text>{job.companyType}</Card.Text>
                    <Card.Text>{job.location}</Card.Text>
                    <Card.Text>{job.salary}</Card.Text>
                    <Card.Text>{job.employeeType}</Card.Text>
                    <Button variant="danger">
                      <DeleteForeverOutlinedIcon/> 
                    </Button>
                    {/* <button>
                    <Link to={`/applyjob/:id`}  className="btn btn-primary sm">Apply</Link>
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