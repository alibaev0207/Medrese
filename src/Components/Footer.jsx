import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <div className='footer__div'>
            <div>
              <h4>Menu</h4>
              <div className='footer__a' >
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/teacher'>Teachers</Nav.Link>
                <Nav.Link href='/video'>Video</Nav.Link>
              </div>
            </div>
            {/* <div>
              <h4>Chat</h4>

            </div> */}
            <div className='contact'>
              <h4>Contack</h4>
              <div className='h6-color'>
                <h5>Medrese@gmail.com</h5>
                <h6 className='h6-con'>+996 777 34 23 45</h6>
                <h6>+996 500 34 56 67</h6>
              </div>
              <div className='block'>
                <a href="https://www.facebook.com/SharshenbayAjy/" ><FaFacebook /></a>
                <a href="https://www.instagram.com/sharshenbai_ajy/?hl=en"><FaInstagram /></a>
                <a href="https://2gis.kg/bishkek/firm/70000001021441887"><FaMapMarkerAlt /></a>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div >
  )
}

export default Footer