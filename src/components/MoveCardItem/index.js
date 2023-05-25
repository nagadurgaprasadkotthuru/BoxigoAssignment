import {HiOutlineArrowRight} from 'react-icons/hi'
import {AiFillHome, AiFillWarning} from 'react-icons/ai'
import {FaBoxes, FaRegCalendarAlt} from 'react-icons/fa'
import {GrEdit} from 'react-icons/gr'
import {ImCheckboxChecked} from 'react-icons/im'
import {GiPathDistance} from 'react-icons/gi'

import InventoryItem from '../InventoryItem'

import './index.css'

const monthsList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const MoveCardItem = props => {
  const {
    moveItemDetails,
    inventory,
    onChangeIsShowViewMoveDetails,
    onChangeIsShowInventoryDetails,
  } = props
  const {
    movingFrom,
    movingTo,
    movingOn,
    estimateId,
    propertySize,
    totalItems,
    distance,
    customStatus,
    isShowViewMoveDetails,
    elevatorDistance,
    newElevatorAvailability,
    oldElevatorAvailability,
    newFloorNo,
    oldFloorNo,
  } = moveItemDetails

  const date = new Date(movingOn)
  const monthIndex = date.getMonth()
  const month = monthsList[monthIndex]
  const day = date.getDate()
  const year = date.getFullYear()
  const minutes = date.getMinutes()
  let hours = date.getHours()
  let amOrPm = 'am'
  if (hours > 12) {
    amOrPm = 'pm'
    hours -= 12
  }
  if (hours === 0) {
    hours = 12
  }
  const dateString = `${month} ${day}, ${year} at ${hours}:${minutes} ${amOrPm}`

  const changeIsShowViewMoveDetails = () =>
    onChangeIsShowViewMoveDetails(estimateId)

  const renderUnOrderedList = (id, ...inventoryArray) => (
    <ul className="unordered-list" key={id}>
      {inventoryArray.map(eachItem => (
        <InventoryItem
          inventoryItemDetails={eachItem}
          key={eachItem.estimatedId}
          onChangeIsShowInventoryDetails={onChangeIsShowInventoryDetails}
        />
      ))}
    </ul>
  )

  const renderViewMoveDetailsView = () => (
    <div className="view-move-container">
      <div className="additional-information-heading-button-container">
        <h4 className="additional-information-heading">
          Additional Information
        </h4>
        <button className="edit-button" type="button">
          Edit Additional Info
        </button>
      </div>
      <p className="test-data">Test Data</p>
      <div className="additional-information-heading-button-container">
        <h4 className="additional-information-heading">House Details</h4>
        <button className="edit-button" type="button">
          Edit House Details
        </button>
      </div>
      <h4 className="existing-house-details-heading red-color">
        Existing House Details
      </h4>
      <div className="existing-house-details">
        <div className="floor-no-container">
          <h5 className="floor-no-heading">Floor No.</h5>
          <p className="floor-no">{oldFloorNo}</p>
        </div>
        <div className="elevator-container">
          <h5 className="elevator-available-heading">Elevator Available.</h5>
          <p className="elevator-available">{oldElevatorAvailability}</p>
        </div>
        <div className="elevator-distance-container">
          <h5 className="elevator-distance-heading">
            Distance from Elevator / Staircase to truck
          </h5>
          <p className="elevator-distance">{elevatorDistance}</p>
        </div>
      </div>
      <h4 className="existing-house-details-heading red-color">
        New House Details
      </h4>
      <div className="existing-house-details">
        <div className="floor-no-container">
          <h5 className="floor-no-heading">Floor No.</h5>
          <p className="floor-no">{newFloorNo}</p>
        </div>
        <div className="elevator-container">
          <h5 className="elevator-available-heading">Elevator Available.</h5>
          <p className="elevator-available">{newElevatorAvailability}</p>
        </div>
        <div className="elevator-distance-container">
          <h5 className="elevator-distance-heading">
            Distance from Elevator / Staircase to truck
          </h5>
          <p className="elevator-distance">{elevatorDistance}</p>
        </div>
      </div>
      <div className="inventory-details-container">
        <h4 className="inventory-heading">Inventory Details</h4>
        <button className="edit-inventory-button" type="button">
          Edit Inventory
        </button>
      </div>
      <div className="inventory-items-container">
        {inventory.map((eachItem, index) =>
          renderUnOrderedList(index, eachItem),
        )}
      </div>
    </div>
  )

  return (
    <li className="move-list-item">
      <div className="list-container">
        <div className="container1">
          <div className="from-container">
            <h5 className="from-heading">From</h5>
            <p className="from">{movingFrom}</p>
          </div>
          <button className="arrow-button" type="button">
            <HiOutlineArrowRight className="arrow-icon red-color" />
          </button>
          <div className="to-container">
            <h5 className="to-heading from-heading">To</h5>
            <p className="to">{movingTo}</p>
          </div>
          <div className="request-container">
            <h5 className="request-heading from-heading">Request#</h5>
            <p className="request red-color">{estimateId}</p>
          </div>
        </div>
        <div className="container1 container2">
          <div className="property-container">
            <AiFillHome className="home-icon small-icons red-color" />
            <p className="property">{propertySize}</p>
          </div>
          <div className="goods-container">
            <FaBoxes className="boxes-icon small-icons red-color" />
            <p className="goods">{totalItems}</p>
          </div>
          <div className="distance-container">
            <GiPathDistance className="distance-icon small-icons red-color" />
            <p className="distance">{distance}</p>
          </div>
          <div className="date-container">
            <FaRegCalendarAlt className="date-icon small-icons red-color" />
            <p className="date">{dateString}</p>
            <GrEdit className="edit-icon small-icons red-color" />
          </div>
          <div className="is-flexible-container">
            <ImCheckboxChecked className="checkbox-icon small-icons red-color" />
            <p className="is-flexible">is flexible</p>
          </div>
          <div className="buttons-container">
            <button
              className="view-move-details-button red-color"
              type="button"
              onClick={changeIsShowViewMoveDetails}
            >
              View move details
            </button>
            <button className="quotes-awaiting-button" type="button">
              {customStatus}
            </button>
          </div>
        </div>
        <div className="disclaimer-warning-container">
          <AiFillWarning className="warning-icon small-icons red-color" />
          <p className="disclaimer">
            <span className="disclaimer-span-element">Disclaimer: </span>Please
            update your move date before two days of shifting
          </p>
        </div>
      </div>
      {isShowViewMoveDetails && renderViewMoveDetailsView()}
    </li>
  )
}

export default MoveCardItem
