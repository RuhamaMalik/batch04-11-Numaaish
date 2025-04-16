import React, { useState } from 'react'

const Child = ({ sendData }) => {
    // const navigate = useNavigate()
    const [name, setName] = useState("")
    const [lname, setLName] = useState("")
    const [comment, setComment] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name.toLowerCase());
        // console.log(lname);
        // console.log(comment);
        

        sendData({name, lname , comment , totalReviews:6})

        // navigate("/home")

    }

 


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" placeholder='Enter your name' onChange={(e) => setName(e.target.value)
                } /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" onChange={(e) => setLName(e.target.value)} /><br /><br />
                <label htmlFor="lname">Last name:</label><br />
                <textarea id="comment" name="comment" onChange={(e) => setComment(e.target.value)} ></textarea><br /><br />
                <input type="submit" value="Submit" />
            </form>

        </>
    )
}

export default Child