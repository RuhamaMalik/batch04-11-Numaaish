import React, { useRef, useState } from 'react'

const UnControl = () => {
    const refEle = useRef(0)
    const [filtered, setFiltered] = useState([])
    const [products, setProducts] = useState([{
        id: 1,
        name: "product1"
    },
    {
        id: 2,
        name: "product2"
    }])



    const handleClick = () => {
        // refEle.current.focus()
        // refEle.current.style.backgroundColor = "crimson"

        const filterProducts = products.filter((product) => product.name.toLowerCase() === refEle.current.value.toLowerCase())

        setFiltered(filterProducts)
        refEle.current.value = ""
    }


   
    
    const handleReset = ()=>{
        setFiltered([])
    }

    return (
        <>

            {/* <h1 >{filtered[0]?.name}</h1> */}
            <div>
                {
                    filtered && filtered?.length ? (
                        <div>
                            {
                                filtered?.map(
                                    (product) => (
                                        <h1 key={product.id}>{product?.name}</h1>
                                    )
                                )
                            }
                        </div>
                    ) : (
                        <div>
                            {
                                products && products?.length && (
                                    <div>
                                        {
                                            products?.map(
                                                (product) => (
                                                    <h1 key={product.id}>{product?.name}</h1>
                                                )
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>

         


            <input id='name' type="text" ref={refEle} />
            <button onClick={handleClick}  >Click me</button>
            <button onClick={handleReset}  >Reset</button>

        </>
    )
}

export default UnControl