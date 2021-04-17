import React from 'react'

export default function Footer() {
  return (
    <div className="container the-footer is-fluid" style={
      {
        minHeight: "250px",
        boxShadow: "0px 0px 7px #FF8D2D",
      }}>
      <div className="columns">
        <div className="column is-one-third" style={{marginLeft: "100px", marginRight: "-100px"}}>
          <div className="row mt-6 ml-2">
            <img src="https://secondh8.s3-ap-southeast-1.amazonaws.com/logo/second.png" width='150px' height='150px' alt="" srcset=""
              style={{
                zIndex: 1
              }}
            />
          </div>
          <div className="row pl-5">
          
          </div>
        </div>
        <div className="column">
          <div className="content is-small mr-5" style={
            {
              marginLeft: '-150px',
              marginTop: '50px',
              zIndex: 2
            }}>
            second. is an application to help people buy and sell used goods. Sometimes people have MANY goods that are no longer used, they may want to sell or trade these but often not sure of how to do it and where to do it. Now with second., everyone will have the opportunity to sell their used goods online. second. will accept a different transaction system, pay directly with full money, trade-in with other items, and put it in the auction system. second. also had a community of shared items, the shared items can be reused again by all the other members, if the user of the shared items finished using the item, the item can be put again in second. to be used by the other community member.

          </div>
        </div>
        <div className="column" style={{textAlign: "end", marginTop: "200px", color: "#FF8D2D"}}>
        </div>
      </div>
    </div>
  )
}
