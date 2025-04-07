import React from 'react'
import ListCard from './ListCard'

const List = () => {

  const items = [
    "Item 1  --- Lorem ipsum dolor sit amet.",
    "Item 2  --- Lorem ipsum dolor sit amet.",
    "Item 3  --- Lorem ipsum dolor sit amet.",
    "Item 4  --- Lorem ipsum dolor sit amet.",
    "Item 5  --- Lorem ipsum dolor sit amet.",
  ]


  return (
    <>
      <h1 className='text-warning text-center'> My List </h1>

{
  items.map((item, index)=>(
    <ListCard  key={index} data={item} />
  ))
}

    </>
  )
}

export default List