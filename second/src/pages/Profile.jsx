import React from 'react'

export default function Profile() {
  const favourites = ['1', '2', '3', '4', 5, 6, 7, 8]

  return (
    <div className="box mt-5">
      <div className="columns is-6">
        <div className="column is-flex is-flex-direction-column is-justify-content-start is-align-items-center">
          <figure className="image is-128x128">
            <img
              className="is-rounded"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
              alt="Placeholder image"
            />
          </figure>
            <h1 className="title is-4">John Smith</h1>
          <button className="button is-light is-rounded">
            Edit Profile
          </button>
        </div>
        <div className="column is-flex is-6 mt-6 is-flex-direction-column">
          <div className="columns">
            <h1 className="title is-4 ml-3">Wishlist</h1>
          </div>
          <div className="columns mt-2 is-flex is-flex-wrap-wrap my-2">
            {favourites.map((e, i) => (
              <div key={i} className="column is-3">
                <figure className="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/256x256.png" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
