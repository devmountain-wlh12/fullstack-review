import React, {Component} from 'react'

export default class Post extends Component {
  state = {
    title: '',
    content: '',
    imgUrl: '',
    editToggle: false
  }

  render() {
    return (
      <div>
        Post.js
      </div>
    )
  }
}