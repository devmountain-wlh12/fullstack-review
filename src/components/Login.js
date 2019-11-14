import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {updateUserInfo} from '../ducks/reducer'
import {connect} from 'react-redux'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  login = () => {
    const {email, password} = this.state
    axios
      .post('/auth/login', {email, password})
      .then(res => {
        this.props.updateUserInfo(res.data.user)
        alert(res.data.message)
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }
  
  render() {
    return (
      <div>
        <input
          onChange={e => this.handleChange('email', e.target.value)}
          value={this.state.email}
          placeholder="Email"
          type="text"
        />
        <input
          onChange={e => this.handleChange('password', e.target.value)}
          value={this.state.password}
          placeholder="Password"
          type="password"
        />
        <button onClick={this.login}>Login!</button>
        <Link to="/register">
          <h4>Need an account? Register here!</h4>
        </Link>
      </div>
    )
  }
}

export default connect(null, {updateUserInfo})(Login)