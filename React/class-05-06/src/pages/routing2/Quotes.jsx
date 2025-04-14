import { useEffect, useState } from "react"
import { NavLink, useLoaderData } from "react-router-dom";
import Button from "../../components/Button";

const Quotes = () => {
// const data = useLoaderData()
// console.log(data.quotes);
// console.log(data.limit);

const {quotes, limit} = useLoaderData()



    return (
        <>

          {

            quotes.map((quote, index)=>(
             
                 <div key={index+quote.id} className="card m-5">
                
                <div className="card-body">
                    <h5 className="card-title">{quote?.author}</h5>
                    <p className="card-text">{quote?.quote}</p>
                    <Button id={quote.id} />
                </div>
            </div>
             
            ))


          } 


        </>
    )
}

export default Quotes

// class 7

export const fetQuotes = async ()=>{
    try {
        const res = await fetch('https://dummyjson.com/quotes');
        return  res.json();

    } catch (error) {
        console.log(error);

    }
}
