import Image from "react-bootstrap/Image"
import Carousel from 'react-bootstrap/Carousel';
import { Badge } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import { useParams } from "react-router-dom"
import { productsArr } from '../assets/data'

function Product() {
  const { id } = useParams()

  const product = productsArr.find(item => item.id === id)


  return (
    <>
      <div className="d-flex w-75 mx-auto flex-column align-items-center mt-5 ">
        <Carousel variant="dark" >
          <Carousel.Item>
            <Image src={product.imageUrl} width={600} height={400} rounded />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={"https://images.hdqwalls.com/wallpapers/beautiful-landscape-digital-art-4k-tj.jpg"} width={600} height={400} rounded />
          </Carousel.Item>
        </Carousel>
        <h1>{product.title}</h1>
        <h2>Reviews <Badge pill bg="success">4 ⭐</Badge></h2>
        <Stack gap={3} className="mb-5 mt-5">
          <p className="border-bottom text-center">Very good product</p>
          <p className="border-bottom text-center">Worth it !!</p>
          <p className="border-bottom text-center">Highly Recommended</p>
        </Stack>
      </div>
    </>
  )
}

export default Product