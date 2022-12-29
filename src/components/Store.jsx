import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Album from './Album';
import { productsArr } from '../assets/data'
import { CartContext } from '../context/CartContext';

function Store() {

  const { user } = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {

    if (!user) navigate('/login')
  }, [])


  return (
    <>

      <div style={{ background: 'gray', height: '20vh' }} className='text-center mb-3'>
        <h1 className='text-white fs-1'>The Generics</h1>
      </div>
      <div className='mb-5 d-flex flex-column align-items-center justify-content-center'>
        <h1>Music</h1>
        <div className='d-flex flex-wrap gap-3'>
          {
            productsArr.map(item => (
              <Album album={item} key={item.title} />
            ))
          }
        </div>
        <Button variant="secondary">See the Cart</Button>
      </div>
    </>
  )
}

export default Store