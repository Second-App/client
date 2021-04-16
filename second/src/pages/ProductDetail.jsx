import React from 'react'

export default function ProductDetail() {
  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column">
          <figure class="image is-4by3 mt-4">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="column">
          <div className="container is-flex is-flex-direction-column is-justify-content-space-between">
            <div className="mt-4">
              <h1 className="title is-4">Description</h1>
            </div>
            <div className="content mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
            <button className="button is-primary is-rounded is-medium is-fullwidth is-flex is-justify-content-center">Action Type</button>
          </div>
        </div>
      </div>
    </div>
  )
}
