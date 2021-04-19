import { confirmAlert } from 'react-confirm-alert'

const logoutConfirmation = (handleLogout) => {
  confirmAlert({
    overlayClassName: "Overlay",
    customUI: ({ onClose }) => {
      return (
        <div className="has-background-light p-6">
          <h1 className="title is-4">Are you sure want to logout?</h1>
          <div className="field is-grouped is-flex is-justify-content-center">
            <div className="control p-2">
              <button
                className="button is-link is-medium is-rounded"
                onClick={() => {
                  handleLogout()
                  onClose()
                }}
              >
                Yes
              </button>
            </div>
            <div className="control p-2">
              <button className="button is-success is-medium is-rounded" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
      )
    },
  })
}

const errorMessages = (errors) => (
  <ul>
    {errors.map((err) => (
      <li>{err}</li>
    ))}
  </ul>
)

const deleteProductConfirmation = (handleProductDelete) => {
  confirmAlert({
    overlayClassName: "Overlay",
    customUI: ({ onClose }) => {
      return (
        <div className="has-background-light p-6">
          <h1 className="title is-4">Are you sure want to delete it?</h1>
          <div className="field is-grouped is-flex is-justify-content-center">
            <div className="control p-2">
              <button
                className="button is-link is-medium is-rounded"
                onClick={() => {
                  handleProductDelete()
                  onClose()
                }}
              >
                Yes
              </button>
            </div>
            <div className="control p-2">
              <button className="button is-success is-medium is-rounded" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
      )
    },
  })
}

export {
  logoutConfirmation,
  errorMessages,
  deleteProductConfirmation
}