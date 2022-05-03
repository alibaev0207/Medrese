import React from 'react'
// import { Nav } from 'react-bootstrap'
// import Tab, { Container } from 'react-bootstrap/lib/Tap'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'


const Teachers = () => {
  return (
    <Container>
      <Tab.Container id="ledt-taps-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} >
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Байыш узтаз</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="second">Нурадил узтаз</Nav.Link>
              </Nav.Item>
            </Nav>            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="third">Эркин узтаз</Nav.Link>
              </Nav.Item>
            </Nav>            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="fifth">Абдумалик узтаз</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className='mt-3'>
              <Tab.Pane eventKey="first">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkgMcgZjEypiVr0Blng2HpBT520-tXZtTzzQ&usqp=CAU" alt="ystaz" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolorum.
                </p>  
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img src="https://sputnik.kg/img/103785/94/1037859409_0:0:6016:4016_600x0_80_0_0_14c14815326a400162ed566f7b742bbd.jpg" alt="ystaz" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolorum.
                </p>  
              </Tab.Pane>              <Tab.Pane eventKey="third">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zXsu5StY66ldr8BGKboGrKUjOcnuK_teNA&usqp=CAU" alt="ystaz" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolorum.
                </p>  
              </Tab.Pane>              <Tab.Pane eventKey="fifth">
                <img src="https://www.ktrk.kg/img/thumbnail/236091534825316_big.jpg" alt="ystaz" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolorum.
                </p>  
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default Teachers