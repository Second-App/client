import React from 'react'

export default function Community() {
  const dummyCategories = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    10,
    11,
    12,
  ]
  return (
    <>
      <div className="box mt-4">
        <div>
          <h4 className="title is-4 mt-4 pl-2 heading">Categories</h4>
        </div>
        <div className="columns is-flex is-flex-wrap-wrap my-2">
          {dummyCategories.map((e, i) => (
            <div className="column is-2" key={i}>
              <figure className="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="box mt-4">
        <div className="heading">
          <h4 className="title is-4 mt-4 pl-2">Giveaway</h4>
        </div>
        <div className="columns is-flex is-flex-wrap-wrap my-2">
          {dummyCategories.map((e, i) => (
            <div className="column is-2 mt-2" key={i}>
              <figure className="image is-3by4">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
