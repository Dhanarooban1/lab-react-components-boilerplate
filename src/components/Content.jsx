import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
        <>
        {
            this.props.data.map(image=>{
                return(
                    <div key={image.id} className="column">
                  <img src={image.img} alt=""></img>
                </div>
              )
            })
        }
        </>
    )
  }
}

export default Content
