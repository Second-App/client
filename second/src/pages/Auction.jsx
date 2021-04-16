import React, { useState } from 'react'

export default function Auction() {
  const [highestBidder, setHighestBidder] = useState('John Doe')
  const [highestPrice, setHighestPrice] = useState(1e5)

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column is-one-quarter my-4">
          <figure className="image is-square">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <div className="is-flex is-flex-direction-column is-justify-content-space-between">
            <div className="mt-4 title is-5">
              <h3 className="title is-4">Description</h3>
              <div className="mt-4 title is-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </p>
              </div>
            </div>
            <button className="button is-medium is-flex is-justify-content-center">
              {highestBidder}
            </button>
            <button className="button is-medium is-flex is-justify-content-center">
              Rp.{highestPrice.toLocaleString('id')}
            </button>
          </div>
        </div>
        <div className="column mt-5">
          <div className="columns">
            <div className="column is-two-thirds chat-box has-background-light">
              Chat Box
            </div>
            <div className="column has-background-light participant-box">
              Participant
            </div>
          </div>
          <div className="columns mt-4">
            <input
              className="input is-info"
              autoFocus={true}
              type="text"
              placeholder="Type a message"
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}
