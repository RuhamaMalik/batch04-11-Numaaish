import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword as createUser, collection, addDoc, db, doc, setDoc } from '../config/firebase.config';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const AuthForm = () => {
    {/*  Step # 2   -------  Create form state */ }
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })

    console.log(user);
    

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
            const userCredential = await createUser(auth, formData.email, formData.password)
            const user = userCredential.user;

            if (user) {

                await setDoc(doc(db, "testUsers", user.uid), {
                    userId: user.uid,
                    name: formData.name,
                    email: formData.email,
                  });


                // const docRef = await addDoc(collection(db, "testUsers"), {
                    // userId: user.uid,
                    // name: formData.name,
                    // email: formData.email,
                // });

                // console.log(docRef);

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
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' value={formData.name} onChange={handleChange} type="text" placeholder="John" />
                </Form.Group>
                <Form.Group className="mb-3  " controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' value={formData.email} onChange={handleChange} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' value={formData.password} onChange={handleChange} type="text" placeholder="Enter Your Password" />
                </Form.Group>


                <Button type="submit" variant="info">Register</Button>

            </Form>
        </>
    )
}

export default AuthForm