import React, { useState } from 'react'
import Child from './Child'

const Parent = ({iconbg}) => {
    const [reviews, setReviews] = useState([])

    const fetchDataFromChild = (data) => {
        setReviews([...reviews, data])
    }

 const isLoggedin = false;


    return (
        <>
            {
                // reviews?.map((review, index) => (
                //     <div key={index+"review"}>
                //         <h1>{review?.name} </h1>
                //         <h1>{review?.lname} </h1>
                //         <h1>{review?.comment} </h1>
                //         <h1>{review?.totalReviews} Reviews</h1>
                //     </div>
                // ))


                Array.isArray(reviews) && reviews.length>0  ? (
                    <>
                        {reviews?.map((review, index) => (
                            <div key={index + "review"}>
                                <h1>{review?.name} </h1>
                                <h1>{review?.lname} </h1>
                                <h1>{review?.comment} </h1>
                                <h1>{review?.totalReviews} Reviews</h1>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <h1>No Reviews Found</h1>
                    </>
                )


            }
            <Child sendData={fetchDataFromChild} />


            <hr />

            {
isLoggedin ? <h1  className={`${iconbg ? "bg-danger" : ""}`}  >Profile</h1> : <h1>Login</h1>

            }
        </>
    )
}

export default Parent