import React from 'react'
import { Badge, Button, Figure, Table } from 'react-bootstrap'

const cartElements = [

    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]
function Cart() {
    return (
        <Table borderless striped size="sm">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartElements.map(el => (
                        <tr>

                            <td>
                                <Figure>
                                    <Figure.Image
                                        width={80}
                                        height={60}
                                        alt={el.title}
                                        src={el.imageUrl}
                                    />
                                    <Figure.Caption>
                                        {el.title}
                                    </Figure.Caption>
                                </Figure>

                            </td>
                            <td>${el.price}</td>
                            <td>
                                <Badge pill bg="info">
                                    {el.quantity}
                                </Badge>{' '}
                                <Button variant="danger">Remove</Button>

                            </td>

                        </tr>

                    ))
                }
                <p><strong>Total : </strong> $27.09</p>
            </tbody>
            <Button variant='info'>Purchase</Button>
        </Table>
    )
}

export default Cart