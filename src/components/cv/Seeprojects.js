import { NavLink } from "react-router-dom";

function SeeProjects () {
    return (
        <div className="card-more">
            <NavLink exact="true" to="/portfolio" className={"btn"}>Voir les projets</NavLink>
        </div>
    );
};

export default SeeProjects;