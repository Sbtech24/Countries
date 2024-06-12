import React from 'react'
import moon from '../assets/moon.svg'
const Header = () => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <div>
        <img src={moon} alt="" />
        <h3>Dark Moon</h3>
      </div>
    </header>
  )
}

export default Header