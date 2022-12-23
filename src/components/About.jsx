import React from 'react'
import { Container, Image, Stack } from 'react-bootstrap'

function About() {
  return (
    <Container className='w-75'>
      <h1 className='text-center'>About</h1>
      <Stack direction="horizontal" gap={3}>
        <Image src='https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png' roundedCircle width={400} height={300} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ducimus odio omnis nisi molestias magnam quia sequi cupiditate deleniti dolor corporis corrupti est quam quod debitis assumenda non ipsum. Saepe.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis officiis, ab facere similique obcaecati cupiditate vel est et? Maxime rerum ea atque ut necessitatibus accusantium ex non perspiciatis tenetur.</p>

      </Stack>
    </Container>
  )
}

export default About