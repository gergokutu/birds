import React from "react"
// injecting and observing with 2 decorators
import { inject, observer } from 'mobx-react'

@inject("BirdStore")
@observer
class Birds extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.BirdStore.addBird(this.birdInput.value);
        e.target.reset();
      };

    render() {
        // access our store via the props
        const { BirdStore } = this.props
        console.log(this.props)

        return (
            <div>Birds
                <h2>You have {BirdStore.birdCount} birds</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        ref={input => (this.birdInput = input)}
                        placeholder="Add a bird"
                    />
                </form>
                
                <ul>
                    {BirdStore.birds.map(bird => (
                        <li key={bird}>{bird}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

// Parsing error: 
// Using the export keyword between a decorator and a class is not allowed.
// Please use `export @dec class` instead.
// Solution » move here the export default part!
export default Birds