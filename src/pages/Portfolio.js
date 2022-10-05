import { NavLink } from "react-router-dom";

function Portfolio () {
    return(
        <section className="portfolio">
            <div className="portfolio-header">
                <h2>Projets réalisés</h2>
                <p>Voici quelques projets que j'ai pu mener à terme à ce jour.</p>
                <p><NavLink exact="true" to="/contact">Contactez-moi</NavLink> pour que j'ajoute le votre!</p>
            </div>
            <div className="portfolio-body">
                <div className="project">
                    <div className="project-image">

                    </div>
                    <div className="project-header">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p>Création de mon portfolio</p>
                        </div>
                        <div className="project-body-technos">
                            <p>React.JS</p>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="#" className="btn">Voir le code source</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">

                    </div>
                    <div className="project-header">
                        <h3>Groupomania</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p>Création d'un réseau social d'entreprise</p>
                        </div>
                        <div className="project-body-technos">
                            <p>React.JS, Redux, Node.JS, Express, MongoDB</p>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="https://github.com/JulienJes/P7_Groupomania" className="btn">Voir le code source</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">

                    </div>
                    <div className="project-header">
                        <h3>La Chouette Agence</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p>Optimisation d'un site web existant</p>
                        </div>
                        <div className="project-body-technos">
                            <p>HTML5, CSS3</p>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="https://github.com/JulienJes/P4_La_Chouette_Agence" className="btn">Voir le code source</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;