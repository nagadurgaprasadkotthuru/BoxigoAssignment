import './index.css'

const InventoryItemDetails = props => {
  const {inventory} = props
  const {items} = inventory

  const renderDetailsView = eachItem => {
    const {displayName, typeOptions, qty, id} = eachItem
    return (
      <li className="list-element2" key={id}>
        <div className="display-name-type-options-container">
          <p className="display-name">{displayName}</p>
          <p className="display-type">{qty}</p>
        </div>
        <p className="display-type">{typeOptions}</p>
      </li>
    )
  }

  return (
    <div className="inventory-item-details-container">
      <h5 className="inventory-item-details-heading">
        {inventory.displayName}
      </h5>
      <ul className="items-container2">
        {items.map(eachItem => renderDetailsView(eachItem))}
      </ul>
    </div>
  )
}

export default InventoryItemDetails
