import React, { useContext, useState } from 'react'
import { auth, signInWithEmailAndPassword as loginUser, onSnapshot, doc, db } from '../config/firebase.config';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { userContext } from '../App';


const LoginForm = () => {
    const {user, setUser} = useContext(userContext)
    {/*  Step # 2   -------  Create form state */ }
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    

    {/*  Step # 3  -------  Update fORMdATA */ }
    const handleChange = (e) => {
        // console.log(e.target.name , e.target.value);

        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))

    }

    {/*  Step # 4  ------- create User */ }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await loginUser(auth, formData.email, formData.password)
            const user = userCredential.user;


            if(user){
                const unsub = onSnapshot(doc(db, "testUsers", user.uid), (doc) => {
                    setUser(doc.data());
                    localStorage.setItem("user",JSON.stringify(doc.data()) )
                  });
            }

        } catch (error) {
            console.log(error);
        }



    }

    return (
        <>
            {/*  Step # 1   -------  Create UI */}
            <Form onSubmit={handleSubmit} className='border p-5 border-5 border-info'   >
                
                <Form.Group className="mb-3  " controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' value={formData.email} onChange={handleChange} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' value={formData.password} onChange={handleChange} type="text" placeholder="Enter Your Password" />
                </Form.Group>


                <Button  type="submit" variant="info">Login</Button>

            </Form>
        </>
    )
}

export default LoginForm