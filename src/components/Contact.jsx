import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    
    const onSubmit = async (e) => {
        e.preventDefault()
        
        let form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        // console.log(formData)

        const response = await fetch('https://fir-99cf8-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          console.log(data)
    }
    

  return (
    <section className='mx-auto mt-5 mb-5 w-50'>

    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="name" >
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="0000"  name="phone" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}

export default Contact;