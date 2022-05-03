import React from 'react'
import { Nav, Navbar, Container, Form, Button, FormControl } from 'react-bootstrap'
import HeaderIcon  from '../img/MUSHAM (1).png'


// import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

// import Home from '../Pages/Home.jsx';
// import Pridmety from '../Pages/Pridmety.jsx';
// import Teachers from '../Pages/Teachers';
// import Contacts from '../Pages/Contacts';

const Header = () => {
    return (
        <>
            <Navbar CollapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={HeaderIcon}
                            height="30px"
                            width="110px"
                            className='d-inlain-block align-top'
                            alt='logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto my-2 my-lg-0'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/pridmety'>Pridmety</Nav.Link>
                            <Nav.Link href='/teacher'>Teachers</Nav.Link>
                            <Nav.Link href='/contacts'>Contacts</Nav.Link>
                        </Nav>
                        <Form inline className='d-flex'>
                            <FormControl
                                type="text"
                                plalceholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Router>
                <Routes>
                    <Route exact path="/" component={<Home/>}/>
                    <Route exact path="/pridmety" component={Pridmety}/>
                    <Route exact path="/teacher" component={Teachers}/>
                    <Route exact path="/contacts" component={Contacts}/>
                </Routes>
            </Router> */}
        </>
    )
}

export default Header