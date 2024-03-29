import React, { useRef } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

function Signup() {

    // const [ firstName, setFirstName ] = useState('')
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log('FirstName: ', firstNameRef);

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password =passwordRef.current.value;

        // console.log(firstName)

        let bodyObj = JSON.stringify({
            firstName, lastName, email, password
        })
        // console.log(bodyObj)

        const url = 'http://localhost:4000/user/signup';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const requestOption = {
            headers,
            body: bodyObj,
            method: "POST"
        }

        try {
            const response = await fetch(url, requestOption);
            const data = await response.json();
            console.log(data);
            
        } catch (err) {
            console.error(err.message)
        }

    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name:</Label>
                    <Input 
                        innerRef={firstNameRef}
                        autoComplete={'off'}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name:</Label>
                    <Input 
                        innerRef={lastNameRef}
                        autoComplete={'off'}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input 
                        innerRef={emailRef}
                        autoComplete={'off'}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input 
                        innerRef={passwordRef}
                        autoComplete={'off'}
                    />
                </FormGroup>
                <Button type='submit'>Signup</Button>
            </Form>
        </>
    )
}

export default Signup