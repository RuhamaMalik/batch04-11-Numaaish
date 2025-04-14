import { useLoaderData } from "react-router-dom"

const DetailPage = () => {
  const {author, quote, id} = useLoaderData()
  
    return (
        <div className="card">
            <div className="card-header">
                Quote
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{quote}</p>
                    <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default DetailPage



export const fetchSingleQuote = async ({id})=>{
    try {

        const res = await fetch(`https://dummyjson.com/quotes/${id}`);
        return  res.json();

    } catch (error) {
        console.log(error);

    }
}
