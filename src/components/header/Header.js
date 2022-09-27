import { NavLink } from "react-router-dom";

function Header () {
    return (
        <header>
            <div className="logo-container">
                <NavLink exact="true" to="/">
                    <span></span>
                    <h1>Julien Jesionek</h1>
                </NavLink>
            </div>
            <div className="nav-container">
                <ul>
                    <li><NavLink exact="true" to="/aboutme">
                        Qui suis-je?
                    </NavLink></li>
                    <li><NavLink exact="true" to="/portfolio">
                        Portfolio
                    </NavLink></li>
                    <li><NavLink exact="true" to="/contact">
                        Me contacter
                    </NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;