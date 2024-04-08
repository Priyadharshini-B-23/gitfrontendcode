
import React,{useState} from 'react';
import "../../styles/HeaderStyleProvider.css";
import { Navbar, Nav, Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from "../Code/Images/backimage2.png";
import Burger from "../../assets/menu/ten.png";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function HeaderProvider() {


  const navigate = useNavigate();

  const logOutFromDashBoard = (event) => {
    Cookies.remove("email");
    Cookies.remove("password");
    // Cookies.remove("UserID");
    // Cookies.remove("vehicleId");
    // Cookies.remove("UserData");
    // Cookies.remove("UserName");
    Cookies.remove("admin")
    navigate("/")
    window.location.reload();
  };


  const [nav,SetNav]=useState(false);
  //Scroll navbar
  const changeValueOnScroll=()=>{
    const scrollValue=document?.documentElement?.scrollTop;
    scrollValue>100? SetNav(true) : SetNav(false);
  };

  window.addEventListener("scroll",changeValueOnScroll);





  return (
<header>
<Navbar collapseOnSelect expand="lg"  className={`${nav === true ? "sticky" : ""}`} >
  <Container>
    <Navbar.Brand href="home" >
     <Link to="/PDashboard" className='logo' >
     <img src={Logo} alt="Logo" className='img-fluid' />
     </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="ms-auto" >
    {/* <Nav.Link as={Link} to="/" >Home</Nav.Link> */}
    <Nav.Link as={Link} to="/postjob">Post Your Jobs</Nav.Link>
    <Nav.Link as={Link} to="/deletejob/:id">Update</Nav.Link>
    <Nav.Link as={Link} to="/viewapplication">View Applications</Nav.Link>
    <Nav.Link as={Link} to="/psearch">Search Candidates</Nav.Link>
    {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
    <Nav.Link as={Link} onClick={logOutFromDashBoard} >Logout</Nav.Link>
    {/* <Nav.Link as={Link} to="/">
      <div className='cart' >
       <i class="bi bi-bag fs-5" ></i>
       <em className='roundpoint'>2</em>
      </div>
      </Nav.Link>                       */}
    </Nav>
    </Navbar.Collapse>
    

  </Container>
</Navbar>


<section className='hero_section'  >
     <Container>
        <Row>
            <Col lg={7} className='mb-5 mb-lg-0' >
                <div className='position:relative' >
                   <img src={Burger} className='fluid' alt="Hero" />
                   {/* <div className='price_badge' >
                    <div className='badge_text' >
                    <h4 className='h4_xs' >Only</h4>
                    <h4 className='h3_lg' >$6.99</h4>
                    </div>
                   </div> */}
                </div>
            </Col>


            <Col lg={5} >
            <div className='hero_text text-center' >
              <h1 className='text-white' >Find The</h1>
              <h2 className='text-white' >Right Candidate</h2>
              <p className='text-white pt-2 pb-4' >Do your best.Your best is better than anyone else around</p>
            {/* <Link to="/" className='btn order_now' >
            Order Now
            </Link> */}
            </div>
            </Col>

        </Row>
     </Container>
    </section>
</header>     


  );
}

export default HeaderProvider;

<Navbar collapseOnSelect expand="lg" >
  <Container>
    <Navbar.Brand  href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto" >
    <Nav.Link href="home"  >Home</Nav.Link>
    <Nav.Link href="features"  >Features</Nav.Link>
    <Nav.Link href="pricing"  >Pricing</Nav.Link>
    </Nav>
  </Container>
   </Navbar>









