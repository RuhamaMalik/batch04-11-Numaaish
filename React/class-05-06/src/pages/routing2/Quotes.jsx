import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

const Quotes = () => {
    // const [{quotes}, setQuotes] = useState([])
    const [quotes, setQuotes] = useState([])

    // useEffect(() => {
    //     fetch('https://dummyjson.com/quotes')
    //     .then(res => res.json())
    //     .then(res => setQuotes(res?.quotes)
    //     );
    // }, [])

    const fetQuores = async () => {
        try {
            const res = await fetch('https://dummyjson.com/quotes');
            const data = await res.json();

            setQuotes(data.quotes);
            //    setQuotes(data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetQuores();
    }, [])

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