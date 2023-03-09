import { NavLink } from 'react-router-dom';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className={(navData) => 'nav-item nav-link' + (navData.isActive ? ' active' : '')} to="/">Home</NavLink>
            <NavLink className={(navData) => 'nav-item nav-link' + (navData.isActive ? ' active' : '')} to="/add-product">Add product</NavLink>
            </div>
        </div>
        </nav>
    )
}
export default Header