import './index.css'

import {RiLogoutCircleFill} from 'react-icons/ri'

import NavItems from '../NavItems'

const Header = props => {
  const {activeTabId, navbarDetailsList} = props
  return (
    <div className="header-bg-container">
      <ul className="header-nav-items-container">
        {navbarDetailsList.map(eachItem => (
          <NavItems
            navItemDetails={eachItem}
            key={eachItem.id}
            activeTabId={activeTabId}
          />
        ))}
      </ul>
      <button className="logout-button" type="button">
        <RiLogoutCircleFill className="react-icon" />
        LOGOUT
      </button>
    </div>
  )
}

export default Header
