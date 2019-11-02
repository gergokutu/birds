import React from "react"
// injecting and observing with 2 decorators
import { inject, observer } from 'mobx-react'

@inject("BirdStore")
@observer
class Birds extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const birdInput = this.birdInput.value
        this.props.BirdStore.addBird(birdInput)
        e.target.reset()
      }

    render() {
        // access our store via the props
        const { BirdStore } = this.props
        console.log(this.props.BirdStore)

        return (
            <div>Birds
                {/* do not have to use birdCount() because it's a get in BirdStore */}
                <h2>You have {BirdStore.birdCount} birds</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        // When the ref attribute is used on an HTML element, 
                        // the ref created in the constructor with React.createRef() 
                        // receives the underlying DOM element as its current property.
                        ref={input => (this.birdInput = input)}
                        placeholder="Add a bird"
                    />
                </form>

                <ul>
                    {BirdStore.birds.map(bird => <li key={bird}>{bird}</li>)}
                </ul>

                <p>{BirdStore.mogyi}</p>
            </div>
        )
    }
}

// Parsing error: 
// Using the export keyword between a decorator and a class is not allowed.
// Please use `export @dec class` instead.
// Solution » move here the export default part!
export default Birds