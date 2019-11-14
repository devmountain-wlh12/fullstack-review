import React, {Component} from 'react'
import Post from './Post'
import Add from './Add'

export default class Dash extends Component {
  state = {
    posts: [],
    toggleAdd: false
  }

  toggle = () => {
    this.setState((prevState) => {
      return {
        toggleAdd: !prevState.toggleAdd  
      }
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Create a Post</button>
        <Post />
        {this.state.toggleAdd && <Add toggle={this.toggle} />}
      </div>
    )
  }
}