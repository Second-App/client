import React from 'react'

export default function ProductList({data, params, heading}) {
  
  return (
    <div className="box mt-4">
        <div className="heading">
          <h4 className="title is-4 mt-4 pl-2">{heading}</h4>
        </div>
        <div className="columns is-flex is-flex-wrap-wrap my-2">
          {data.map((e, i) => (
            <div className="column is-2 mt-2" key={i}>
              <figure className="image is-3by4">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt=""/>
              </figure>
            </div>
          ))}
        </div>
      </div>
  )
}
