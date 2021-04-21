import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

export default function ProductList({
  data,
  params,
  heading,
  setCollapsed,
  isCollapsed,
  categories,
  setProductFilter,
}) {
  const getDropDown = (setCollapsed, isCollapsed) => {
    return (
      <div
        className={'dropdown' + (isCollapsed ? '' : ' is-active')}
        tabIndex="0"
      >
        <div className="dropdown-trigger">
          <button
            className="button is-white"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <span>Filter By Category</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a onClick={() => {
              setProductFilter("")
              setCollapsed(!isCollapsed)
            }} className="dropdown-item">
              All
              </a>
          </div>
          {categories?.map((cat) => (
            <div key={cat.id} className="dropdown-content">
              <a onClick={() => {
                setProductFilter(cat.id)
                setCollapsed(!isCollapsed)
              }} className="dropdown-item">
                {cat.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const [theType, settheType] = useState('Full-Payment')

  useEffect(() => {
    switch (data[0].TypeId) {
      case 1:
        settheType('Full-Payment')
        break;
      case 2:
        settheType('Auction')
        break;
      case 3:
        settheType('Shared-Goods')
        break;
      default:
        break;
    }
  }, [])

  const typeRoute = `/type/${data[0].TypeId}`

  return (
    <div className="box mt-2"
      style={{boxShadow: '0px 0px 0px'}}
    >
      <div className="level">
        <div
          className="heading title is-4 mt-4 pl-2 mb-4 level-left"
        >
          <Link to={typeRoute}>
            <p style={{color: 'black'}}>
              {heading ? heading : theType}
            </p>
          </Link>
        </div>
        <div className="level-right">
          {setCollapsed ? getDropDown(setCollapsed, isCollapsed) : ''}
        </div>
      </div>
      <div className="columns is-multiline">
        {data.map((data) => (
          <ProductCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  )
}
