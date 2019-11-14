import React, {Component} from 'react'

export default class Post extends Component {
  state = {
    title: '',
    content: '',
    imgUrl: '',
    editToggle: false
  }

  toggle = () => {
    this.setState((prevState) => ({editToggle: !prevState.editToggle}))
  }

  render() {
    const {editToggle} = this.state
    return (
      <div>
        {editToggle ? <input value={this.state.title} /> : <h2>{this.state.title}</h2>}
        {editToggle ? <input value={this.state.imgUrl} /> : <img src={this.state.imgUrl} alt="" />}
        {editToggle ? <textarea value={this.state.content} /> :<p>{this.state.content}</p>}
        <button onClick={this.toggle}>{editToggle ? 'Save' : 'Edit'}</button>
      </div>
    )
  }
}