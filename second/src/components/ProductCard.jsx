import React from 'react'

export default function ProductCard(props) {
  const { data } = props
  const e = data
  return (
    <div className="column is-one-fifth mt-2" key={e.id}>
      <figure className="image">
        <img
          className="image"
          src={e.imageUrl}
          alt={e.name}
          style={{
            borderRadius: '20px',
            boxShadow: '0px 0px 7px #FF8D2D',
            height: '250px',
            width: '250px',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
      </figure>
      <p
        className="subtitle"
        style={{ textAlign: 'left', marginTop: '15px' }}
      >
        {e.name}
      </p>
    </div>
  )
}
