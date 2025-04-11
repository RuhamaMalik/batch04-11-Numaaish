import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const Button = ({id}) => {
  return (
    <NavLink to={`/quotes/${id}`} className="btn btn-info">
      Go somewhere  
      <FontAwesomeIcon icon={faArrowRight} />
      </NavLink>
  )
}

export default Button