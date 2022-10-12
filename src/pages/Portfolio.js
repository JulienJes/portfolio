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
                <div className="project fadein--1">
                    <div className="project-image">

                    </div>
                    <div className="project-header">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p>Création de mon portfolio</p>
                        </div>
                        <div className="technos">
                            <span className="react">React.JS</span>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="#" className="btn">Voir le code source</a>
                    </div>
                </div>
                <div className="project fadein--2">
                    <div className="project-image">

                    </div>
                    <div className="project-header">
                        <h3>Groupomania</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p>Création d'un réseau social d'entreprise</p>
                        </div>
                        <div className="technos">
                            <span className="react">React.JS</span>
                            <span className="redux">Redux</span>
                            <span className="node">Node.JS</span>
                            <span className="express">Express</span>
                            <span className="mongodb">MongoDB</span>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="https://github.com/JulienJes/P7_Groupomania" className="btn">Voir le code source</a>
                    </div>
                </div>
                <div className="project fadein--3">
                    <div className="project-image">
                        <img src="./img/sites/chouetteagence.png" alt="La Chouette Agence"/>
                    </div>
                    <div className="project-header">
                        <h3>La Chouette Agence</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p>Optimisation d'un site web existant</p>
                        </div>
                        <div className="technos">
                            <span className="html">HTML5</span>
                            <span className="css">CSS3</span>
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