import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DetailPage = () => {
    const { id } = useParams();
    const [quote, setQuote] = useState({})


    useEffect(() => {
        fetch(`https://dummyjson.com/quotes/${id}`)
            .then(res => res.json())
            .then(res => setQuote(res)
            );
    }, [])



    return (
        <div className="card">
            <div className="card-header">
                Quote
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{quote.quote}</p>
                    <footer className="blockquote-footer"><cite title="Source Title">{quote.author}</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default DetailPage