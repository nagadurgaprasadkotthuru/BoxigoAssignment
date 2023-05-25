import {FaTruck, FaUserAlt, FaCalculator} from 'react-icons/fa'

import './index.css'

const NavItems = props => {
  const {activeTabId, navItemDetails} = props
  const {id, label} = navItemDetails
  const activeTabClass = activeTabId === id ? 'active' : ''
  let ReactIcon
  switch (id) {
    case 'MY_MOVES':
      ReactIcon = FaTruck
      break
    case 'MY_PROFILE':
      ReactIcon = FaUserAlt
      break
    case 'GET_QUOTE':
      ReactIcon = FaCalculator
      break
    default:
      ReactIcon = null
  }
  return (
    <li className={`nav-item ${activeTabClass}`}>
      <ReactIcon className="react-icon" /> {label}
    </li>
  )
}

export default NavItems
