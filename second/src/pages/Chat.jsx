import React from 'react'

export default function Chat({ type }) {
  const historyUsersChat = ['Dedengkot', 'TukangKesroh']

  return (
    <div className="box mt-5">
      <div className="columns">
        <div className="column is-one-quarter ">
          <div className="columns ml-2 mt-2">Jual Beli</div>
          <div className="columns has-background-light p-4 mt-1 mx-1">
            {historyUsersChat[0]}
          </div>
          <div className="columns has-background-light p-4 mt-1 mx-1">
            {historyUsersChat[1]}
          </div>
        </div>
        <div className="column mt-5">
          <div className="columns">
            <div className="column is-8 chat-box has-background-light is-flex is-flex-direction-column">
              <div className="columns has-background-grey-light p-4 mt-1 mx-1">
                <div className="column">
                  <div className="columns title is-6">
                      Dedengkot
                  </div>
                  <div className="columns content">
                      32 Juta?
                  </div>
                </div>
              </div>
               
              <div className="columns has-background-grey-light p-4 mt-1 mx-1">
              <div className="column">
                  <div className="columns title is-6">
                      Monot
                  </div>
                  <div className="columns content">
                      Ga dulu deh
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4 has-background-light participant-box is-flex is-justify-content-center is-flex-direction-column">
              <div class="field mt-2 p-1">
                <label className="label"> Duit</label>
                <div class="control">
                  <input class="input is-primary " type="number" min="1" />
                </div>
              </div>
              <div className="columns px-4 mt-2">
                <div class="field ">
                  <div class="file is-primary ">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">Choose a file</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="columns mt-2">
                <div className="content px-4">
                  Lorem ipsum dolor sit amet consectetur,
                </div>
              </div>
              <div className="columns mt-2 px-4">
                <button className="is-rounded button is-link is-fullwidth is-flex is-justify-content-center">
                  Deal
                </button>
              </div>
            </div>
          </div>
          <div className="columns mt-4 pb-2">
            <input
              className="input is-info is-focused"
              type="text"
              placeholder="Type a message"
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}
