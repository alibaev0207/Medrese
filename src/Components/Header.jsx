// import { Modal } from 'bootstrap'
import React, { useState } from 'react'
import { Nav, Navbar, Container,  Button, Form, Modal } from 'react-bootstrap'
import HeaderIcon  from '../img/MUSHAM (1).png'



const Header = () => {


    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
                            <Nav.Link href='/teacher'>Teachers</Nav.Link>
                            <Nav.Link href='/video'>Video</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant='primary' className='mr-2' style={{marginRight: '10'}} onClick={handleShow}>Log in</Button>
                            <Button variant='primary' onClick={handleShow}>Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header claseButton>
                    <Modal.Title>log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control type='email' placeholder='Enter email'/>
                            <Form.Text className='text-muted'>We'll never share your email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter password'/>
                        </Form.Group>                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Check type='checkbox' label="Remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header