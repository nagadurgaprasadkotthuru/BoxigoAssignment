import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'

import InventoryItemDetails from '../InventoryItemDetails'

import './index.css'

const InventoryItem = props => {
  const {inventoryItemDetails, onChangeIsShowInventoryDetails} = props
  const {
    estimatedId,
    displayName,
    category,
    isShowInventoryDetails,
  } = inventoryItemDetails
  const DropDownIcon = isShowInventoryDetails
    ? RiArrowDropUpLine
    : RiArrowDropDownLine
  let noOfItems = 0
  category.map(eachItem => {
    noOfItems += eachItem.items.length
    return noOfItems
  })

  const changeIsShowInventoryDetails = () =>
    onChangeIsShowInventoryDetails(estimatedId)

  const renderDropDownView = () => (
    <div className="drop-down-container">
      {category.map(eachItem => (
        <InventoryItemDetails inventory={eachItem} key={eachItem.id} />
      ))}
    </div>
  )

  return (
    <li className="inventory-item">
      <div className="inventory-item-container">
        <h4 className="inventory-item-heading red-color">
          {displayName}
          <span className="inventory-item-span">{noOfItems}</span>
        </h4>
        <button
          className="drop-down-button"
          type="button"
          onClick={changeIsShowInventoryDetails}
        >
          <DropDownIcon className="drop-down-icon" />
        </button>
      </div>
      {isShowInventoryDetails && renderDropDownView()}
    </li>
  )
}

export default InventoryItem
