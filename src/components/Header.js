import React from 'react'
import logo from '../assets/Instamilligram.svg'
import './Header.css'
import {connect} from 'react-redux'

const Header = (props) => {
  return (
    <header>
      {props.profile_img && <img src={props.profile_img} alt=""/>}
      <img src={logo} alt='logo' />
      {props.name && <button>Logout</button>}
    </header>
  )
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps)(Header)