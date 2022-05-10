import React from 'react'
// import { Nav } from 'react-bootstrap'
// import Tab, { Container } from 'react-bootstrap/lib/Tap'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'
import erkin from '../assets/erkin.jpg'
import muxxam from '../assets/muxxam.jpg'
import abdu from '../assets/abdu.jpg'
import maksat from '../assets/maksat.jpg'


const Teachers = () => {
  return (
    <Container>
      <Tab.Container id="ledt-taps-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} >
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Мухаммад устаз</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="second">Максат устаз</Nav.Link>
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
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="sixty">Сулайман устаз</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className='mt-3'>
              <Tab.Pane eventKey="first">
                <img className='first' src={muxxam} alt="ystaz" />
                <p>Учитель английского
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img className='first' src={maksat} alt="ystaz" />
                <p>Кыргыз жана Кыргыз адабият мугалими
                </p>
              </Tab.Pane>              <Tab.Pane eventKey="third">
                <img className='first' src={erkin} alt="ystaz" />
                <p>Учитель по Алгебре
                </p>
              </Tab.Pane>              <Tab.Pane eventKey="fifth">
                <img className='first' src={abdu} alt="ystaz" />
                <p>Учитель по Арабскому
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="sixty">
                <img className='first' src="https://i.ytimg.com/vi/p9RfePoVMBs/mqdefault.jpg" alt="ystaz" />
                <p>Сулайман устаз учитель АКЫЙДА
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