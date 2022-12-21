import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
    return (
        <Navbar style={{background: '#56CCF2'}}>
            <Navbar.Brand>
                <h2 className='text-white ms-5' >The Generics</h2>

            </Navbar.Brand>
            <Container fluid className='d-flex justify-content-end'>

                <div className='d-flex justify-content-evenly w-50'>

                    <a href="https://youtube.com">

                    <img src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="spotify logo" />
                    </a>
                    <a href="https://facebook.com">

                    <img src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="facebook logo" />
                    </a>
                    <a href="https://spotify.com">

                    <img src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="spotify logo" />
                    </a>
                </div>
            </Container>

        </Navbar>
    )
}

export default Footer