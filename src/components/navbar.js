import {Link} from 'react-router-dom'
function NavBar() {
  return (
      <nav className='nav'>
          <h3>Logo</h3>
          <ul className='nav-links'>
            <Link to='/about' style = {{textDecoration:'none', color:'white'}}>
              <li>About</li>
            </Link>
            <Link to='/products'style = {{textDecoration:'none', color:'white'}}>
              <li>Products</li>
            </Link>
          </ul>
      </nav>
  );
}

export default NavBar;
  