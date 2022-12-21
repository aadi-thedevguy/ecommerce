import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Navigation from './components/Navbar'
import Footer from './components/Footer'
import Album from './components/Album';

const productsArr = [

  {

    title: 'Colors',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

  },

  {

    title: 'Black and white Colors',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  },

  {

    title: 'Yellow and Black Colors',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {

    title: 'Blue Color',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  }

]

function App() {

  return (
    <div className="App">
      <Navigation />
      <div style={{ background: 'gray', height: '20vh' }} className='text-center mb-3'>
        <h1 className='text-white fs-1'>The Generics</h1>
      </div>
      <div className='mb-5 d-flex flex-column align-items-center justify-content-center'>
        <h1>Music</h1>
        <Container>
          <Row md="2">
            {

              productsArr.map(item => (
                <Col>

                  <Album album={item} key={item.title} />
                </Col>
              ))

            }
          </Row>
        </Container>
        <Button variant="secondary">See the Cart</Button>

      </div>
      <Footer />
    </div>
  )
}

export default App
