import Image from 'next/image'
import svgBrand from '../../assets/svg/cloudy.svg'

export const Navbar = () => {
  return(<>
    <nav id='nav'>
      <ul>
        <li className='nav-brand'>
          <Image
          src={svgBrand}
          />
        </li>
        <li>
          <p>WN</p>
          </li>
        <li className='nav-brand'>
          <Image
          src={svgBrand}
          />
        </li>
      </ul>
    </nav>
  </>)
}