import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const isLoggedIn = false;

  useEffect(() => {
      if (isLoggedIn) {
        
          navigate("/services")
      }
  }, [isLoggedIn])


  return (
  <>
  <h1>Home Page</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam omnis quaerat similique fugiat nobis magni consectetur error modi, consequatur dolores! Fugiat suscipit aperiam quis, dolore quaerat cupiditate mollitia temporibus? Quos!</p>
  </>
  )
}

export default Home