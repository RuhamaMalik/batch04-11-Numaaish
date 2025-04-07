import React from 'react'

const ListCard = ({data}) => {
    return (
        <>
            <div className="card my-5">
                <div className="card-body">
                    {data}
                </div>
            </div>
        </>
    )
}

export default ListCard