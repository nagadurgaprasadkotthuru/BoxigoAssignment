import {Component} from 'react'

import Home from './components/Home'
import Header from './components/Header'

import './App.css'

const navbarDetailsList = [
  {
    id: 'MY_MOVES',
    label: 'MY MOVES',
  },
  {
    id: 'MY_PROFILE',
    label: 'MY PROFILE',
  },
  {
    id: 'GET_QUOTE',
    label: 'GET QUOTE',
  },
]

class App extends Component {
  state = {activeTabId: navbarDetailsList[0].id}

  render() {
    const {activeTabId} = this.state
    return (
      <div className="app-bg-container">
        <Header
          navbarDetailsList={navbarDetailsList}
          activeTabId={activeTabId}
        />
        <Home />
      </div>
    )
  }
}

export default App
