import { NavLink } from "react-router-dom";

function Header () {
    return (
        <header>
            <div className="logo-container">
                <NavLink exact="true" to="/">
                    <img src="./img/logo/logo.webp" alt="logo"/>
                    <h1>Julien Jesionek</h1>
                </NavLink>
            </div>
            <nav className="nav-container">
                <ul>
                    <li><NavLink exact="true" to="/aboutme" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        Qui suis-je?
                    </NavLink></li>
                    <li><NavLink exact="true" to="/portfolio" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        Portfolio
                    </NavLink></li>
                    <li><NavLink exact="true" to="/contact" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                        Me contacter
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;