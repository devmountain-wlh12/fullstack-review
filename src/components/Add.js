import React, {Component} from 'react'
import './Add.css'

export default class Add extends Component {
  state = {
    title: '',
    imgUrl: '',
    content: ''
  }
  render() {
    return (
      <div className="add">
        <i onClick={this.props.toggle} class="fas fa-times fa-2x"></i>
        <input placeholder="Title" type="text"/>
        <input placeholder="Image URL" type="text"/>
        <div className="img-container">
          <img src={this.state.imgUrl} alt="" />
        </div>
        <textarea placeholder="What do you want to say?" />
        <button>Post</button>
      </div>
    )
  }
}