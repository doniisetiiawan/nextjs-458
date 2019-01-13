import Link from 'next/link';
import './Navbar.scss';

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li>Codejobs</li>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </div>
);

export default Navbar;
