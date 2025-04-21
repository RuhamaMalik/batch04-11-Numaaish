import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const AuthForm = () => {
    const [email , setEmail]= useState()
    const [password , setPassword]= useState()

const handleSubmilt= (e)=>{
    e.preventDefault();
console.log(email);
console.log(password);

}

  return (
    <Form onSubmit={handleSubmilt}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control type="text"  defaultValue={password} onChange={(e)=>setPassword(e.target.value)} />
      <Button type='submit' variant="primary">Primary</Button>
    </Form.Group>
  </Form>
  )
}

export default AuthForm