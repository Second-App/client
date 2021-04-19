import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({
  data,
  params,
  heading,
  setCollapsed,
  isCollapsed,
  categories,
  setProductFilter
}) {
  const getDropDown = (setCollapsed, isCollapsed) => {
    return (
      <div
        className={'dropdown' + (isCollapsed ? '' : ' is-active')}
        tabIndex="0"
      >
        <div className="dropdown-trigger">
          <button
            className="button"
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

  return (
    <div className="box mt-4">
      <div className="heading is-flex is-justify-content-start">
        <h4 className="title is-4 mt-4 pl-2">{heading}</h4>
        {setCollapsed ? getDropDown(setCollapsed, isCollapsed) : ''}
      </div>
      <div className="columns is-multiline">
        {data.map((data) => (
          <ProductCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  )
}
