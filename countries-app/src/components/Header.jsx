
import moon from '../assets/moon.svg'
import "./header.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { searchContext } from './SearchContext'
import { themeContext } from './ThemeContext'


const Header = () => {
  const {setSearch} = useContext(searchContext)
  const{toggleTheme} = useContext(themeContext)
  
  const home = ()=>{
    setSearch(false)
  }
  return (
    <header>
      
      <Link to="/" className='link' onClick={home}><h1>Where in the world?</h1> </Link>
      <div className='dark-mode-container' onClick={toggleTheme}>
        <img src={moon} alt="" />
        <h3>Dark Moon</h3>
      </div> 
    </header>
  )
}

export default Header