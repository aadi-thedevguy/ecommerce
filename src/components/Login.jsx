import { useState, useRef,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import { CartContext } from '../context/CartContext';

function Login() {

    const navigate = useNavigate()

    const authCtx = useContext(CartContext)
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLAZfI3knkbyxNuEyi2t-QrjiOXbPCZVc';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then(data => {
                        let errorMessage = 'Authentication failed!';

                        throw new Error(errorMessage);
                    })
                }
            })
            .then((data) => {
                authCtx.login(data)
                navigate('/store')
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <section className='mx-auto mt-5 mb-5 w-50'>
            <Form onSubmit={onSubmit}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} required name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" ref={passwordInputRef} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                {isLoading && <h3>Sending request...</h3>}
            </Form>
        </section>
    )
}

export default Login