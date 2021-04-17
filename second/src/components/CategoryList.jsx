import React from 'react'

export default function CategoryList({ data }) {
  return (
    <>
      <div className="box mt-4">
        <div>
          <h4 className="title is-4 mt-4 pl-2 heading">Categories</h4>
        </div>
        <div className="columns is-flex is-flex-wrap-wrap my-2">
          {data.map((e, i) => (
            <div className="column is-2" key={i}>
              <figure className="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="category"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
