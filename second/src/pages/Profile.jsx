import React from 'react'

export default function Profile() {
  const favourites = ['1', '2', '3', '4']

  return (
    <div class="container mt-4">
      <div class="columns">
        <div class="has-background-white column is-6 is-flex is-justify-content-center mt-4 is-align-items-center is-flex-direction-column">
          <div className="columns is-flex-direction-column is-align-items-center">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                alt="Placeholder image"
              />
            </figure>
            <h1 class="title is-4 mt-4">John Smith</h1>
          </div>
          <div className="columns mt-4">
            <button class="button is-primary">Edit Profile</button>
          </div>
        </div>
        <div class="column is-flex is-6 is-align-items-center mt-6 is-flex-direction-column">
          <div className="columns">
            <h1 class="title is-4">Wishlist</h1>
          </div>
          <div className="columns mt-4">
            {favourites.map((e, i) => (
              <div key={i} className="column is-3">
                <figure class="image is-128x128">
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
