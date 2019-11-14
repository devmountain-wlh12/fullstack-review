import React from 'react'
import logo from '../assets/Instamilligram.svg'
import './Header.css'
import { connect } from 'react-redux'
import { updateUserInfo } from '../ducks/reducer'
import axios from 'axios'
import Swal from 'sweetalert2'

const Header = props => {
  const logout = () => {
    axios.delete('/auth/logout').then(res => {
      Swal.fire(res.data.message)
      props.updateUserInfo({
        email: '',
        name: '',
        user_id: '',
        profile_img: ''
      })
    })
  }
  return (
    <header>
      {props.profile_img && <img src={props.profile_img} alt="" />}
      <img className='logo' src={logo} alt="logo" />
      {props.name && <button onClick={logout}>Logout</button>}
    </header>
  )
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(
  mapStateToProps,
  { updateUserInfo }
)(Header)
