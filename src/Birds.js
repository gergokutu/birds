import React from "react"
// injecting and observing with 2 decorators
import { inject, observer } from 'mobx-react'

@inject("BirdStore")
@observer
class Birds extends React.Component {

  render() {
    // access our store via the props
    const { Birdstore } = this.props
    console.log(this.props)

    return (
      <div>Birds</div>
    )
  }
}

// Parsing error: 
// Using the export keyword between a decorator and a class is not allowed.
// Please use `export @dec class` instead.
// Solution » move here the export default part!
export default Birds