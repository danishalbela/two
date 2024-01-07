import React, { Component } from 'react'

export default class Five extends Component {
     
    constructor(props)
    {
        super(props)
        console.log(props)

        let childData = props.data + '== sent back by child'
        // console.log(childData)
    }
 

  render() {
    return (
      <div>Five</div>
    )
  }
}
