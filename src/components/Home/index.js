import {Component} from 'react'

import MoveCardItem from '../MoveCardItem'

import './index.css'

class Home extends Component {
  state = {movesList: [], inventoryDataList: []}

  componentDidMount() {
    this.getMovesList()
  }

  getMovesList = async () => {
    const requestUrl = 'http://test.api.boxigo.in/sample-data/'
    const response = await fetch(requestUrl)
    const data = await response.json()
    const customerEstimateFlow = data.Customer_Estimate_Flow
    const formattedEstimateFlowData = customerEstimateFlow.map(eachItem => ({
      movingFrom: eachItem.moving_from,
      movingTo: eachItem.moving_to,
      movingOn: eachItem.moving_on,
      estimateId: eachItem.estimate_id,
      propertySize: eachItem.property_size,
      totalItems: eachItem.total_items,
      distance: eachItem.distance,
      userId: eachItem.user_id,
      customStatus: eachItem.custom_status,
      isShowViewMoveDetails: false,
      items: eachItem.items,
      elevatorDistance: '11 meters',
      newElevatorAvailability: eachItem.new_elevator_availability,
      oldElevatorAvailability: eachItem.old_elevator_availability,
      newFloorNo: eachItem.new_floor_no,
      oldFloorNo: eachItem.old_floor_no,
    }))
    const inventoryData = formattedEstimateFlowData.map(eachItem => {
      const {inventory} = eachItem.items
      const {estimateId} = eachItem
      const updatedInventory = inventory.map(eachInventory => ({
        ...eachInventory,
        isShowInventoryDetails: false,
        estimatedId: eachInventory.id + estimateId,
      }))
      return updatedInventory
    })
    this.setState({
      movesList: formattedEstimateFlowData,
      inventoryDataList: inventoryData,
    })
  }

  onChangeIsShowViewMoveDetails = id => {
    this.setState(prevState => ({
      movesList: prevState.movesList.map(eachItem => {
        if (eachItem.estimateId === id) {
          return {
            ...eachItem,
            isShowViewMoveDetails: !eachItem.isShowViewMoveDetails,
          }
        }
        return eachItem
      }),
    }))
  }

  onChangeIsShowInventoryDetails = id => {
    this.setState(prevState => ({
      inventoryDataList: prevState.inventoryDataList.map(eachItem =>
        eachItem.map(eachInventory => {
          if (eachInventory.estimatedId === id) {
            return {
              ...eachInventory,
              isShowInventoryDetails: !eachInventory.isShowInventoryDetails,
            }
          }
          return eachInventory
        }),
      ),
    }))
  }

  render() {
    const {movesList, inventoryDataList} = this.state
    return (
      <div className="home-bg-container">
        <h1 className="main-heading">My Moves</h1>
        <ul className="lists-container">
          {movesList.map((eachItem, index) => (
            <MoveCardItem
              moveItemDetails={eachItem}
              inventory={inventoryDataList[index]}
              key={eachItem.estimateId}
              onChangeIsShowViewMoveDetails={this.onChangeIsShowViewMoveDetails}
              onChangeIsShowInventoryDetails={
                this.onChangeIsShowInventoryDetails
              }
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
