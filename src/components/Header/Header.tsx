import { Link } from 'react-router-dom';
import logo from '../../assets/main-logo.svg'
import './Header.scss'


function Header() {
    return (
        <header className="header">
            <ul className='navbar'>
                <li className="main-logo-container"> <img src={logo} alt="logo Sport See" className="main-logo-img" />
                    <p className="main-logo-text">SportSee</p></li>
                <li className="navbar-element"><Link to="/">Accueil</Link></li>
                <li className="navbar-element"><Link to="/profile">Profil</Link></li>
                <li className="navbar-element"><Link to="/settings">Réglage</Link></li>
                <li className="navbar-element"><Link to="/community">Communauté</Link></li>
            </ul>

        </header>
    )
}

export default Header;

<Link to="/path">Texte du lien</Link>
