import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ data, params, heading }) {
  return (
    <div className="box mt-4">
      <div className="heading">
        <h4 className="title is-4 mt-4 pl-2">{heading}</h4>
      </div>
      <div className="columns is-multiline">
        {data.map((data) => (
          <ProductCard data={data} key={data.id}/>
        ))}
      </div>
    </div>
  )
}
