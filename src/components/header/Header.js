import { NavLink } from "react-router-dom";

function Header () {
    return (
        <header>
            <div className="logo-container">
                <NavLink exact="true" to="/">
                    <h1>Julien Jesionek</h1>
                </NavLink>
            </div>
            <div className="nav-container">
                <ul>
                    <li><NavLink exact="true" to="/aboutme">
                        <span>Qui suis-je?</span>
                    </NavLink></li>
                    <li><NavLink exact="true" to="/portfolio">
                        <span>Portfolio</span>
                    </NavLink></li>
                    <li><NavLink exact="true" to="/contact">
                        <span>Me contacter</span>
                    </NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;