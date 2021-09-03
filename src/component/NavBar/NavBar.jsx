import './NavBar.scss';
import icon from 'elements/Icon/cloudy.svg'
export const Navbar = () => {
  return(<>
    <nav id='nav'>
      <ul>
        <li className='nav-brand'>
          <img src={icon} alt="illustration d'un soleil caché par un nuage" />
        </li>
        <li>
          <p>WN</p>
          </li>
        <li className='nav-brand'>
        <img src={icon} alt="illustration d'un soleil caché par un nuage" />
        </li>
      </ul>
    </nav>
  </>)
}