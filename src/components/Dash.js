import React, {Component} from 'react'
import Post from './Post'
import Add from './Add'

export default class Dash extends Component {
  state = {
    posts: []
  }
  render() {
    return (
      <div>
        <Post />
        <Add />
      </div>
    )
  }
}