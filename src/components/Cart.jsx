import { useContext,useEffect } from 'react'
import { Badge, Button, Figure, Stack } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function Cart() {

    const { cartItems } = useContext(CartContext)
    
    return (
        <div >
            <Stack direction="horizontal" className='flex justify-content-between' gap="3">
                <h2>Item</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>

            </Stack>
            {
                cartItems.map(el => (
                    <Stack direction="horizontal" className='flex justify-content-between' key={el._id}>

                        <Figure className='d-flex flex-column'>
                            <Figure.Image
                                width={60}
                                height={40}
                                alt={el.title}
                                src={el.imageUrl}
                            />
                            <Figure.Caption>
                                {el.title}
                            </Figure.Caption>
                        </Figure>


                        <div><h3>
                            ${el.price}
                        </h3></div>
                        <div>
                            <Badge pill bg="info">
                                {el.quantity}
                            </Badge>{' '}
                            <Button variant="danger">Remove</Button>

                        </div>
                    </Stack>
                ))
            }

            {/* <h3><strong>Total : </strong> $00.00</h3> */}
            <Button variant='info'>Purchase</Button>
        </div>

    )
}

export default Cart