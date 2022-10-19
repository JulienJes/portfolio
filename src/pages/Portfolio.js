import { NavLink } from "react-router-dom";
import { SiReact, SiMongodb, SiRedux, SiJavascript, SiExpress, SiHtml5, SiCss3 } from "react-icons/si";
import { DiNodejs } from "react-icons/di";


function Portfolio () {
    return(
        <section className="portfolio">
            <div className="portfolio-header">
                <h2>Projets réalisés</h2>
                <p>Voici quelques projets que j'ai pu mener à terme à ce jour.</p>
                <p>Consultez mon <a href="https://github.com/JulienJes" alt="GitHub">GitHub</a> pour en voir d'autres.</p>
                <p><NavLink exact="true" to="/contact">Contactez-moi</NavLink> pour que j'ajoute le vôtre!</p>
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
                            <p><strong>Création</strong> de mon portfolio</p>
                        </div>
                        <div className="technos">
                        <span><SiReact fill="#5ED3F3" title="React.js" /></span>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="#" className="btn">Voir le code source</a>
                    </div>
                </div>
                <div className="project fadein--2">
                    <div className="project-image">
                        <img src="./img/sites/groupomania.webp" alt="Groupomania"/>
                    </div>
                    <div className="project-header">
                        <h3>Groupomania</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p><strong>Création</strong> d'un réseau social d'entreprise de A à Z</p>
                        </div>
                        <div className="technos">
                            <span><SiReact fill="#5ED3F3" title="React.js" /></span>
                            <span><SiRedux fill="#7649BB" title="Redux" /></span>
                            <span><SiJavascript fill="#EFD81D" title="Javascript" /></span>
                            <span><DiNodejs fill="#639A58" title="Node.js" /></span>
                            <span><SiExpress fill="#384752" title="Express.js" /></span>
                            <span><SiMongodb fill="#4AB13C" title="MongoDB" /></span>
                        </div>
                    </div>
                    <div className="project-buttons">
                        {/*<a href="#" className="btn">Voir le site</a>*/}
                        <a href="https://github.com/JulienJes/P7_Groupomania" className="btn">Voir le code source</a>
                    </div>
                </div>
                <div className="project fadein--3">
                    <div className="project-image">
                        <img src="./img/sites/chouetteagence.webp" alt="La Chouette Agence"/>
                    </div>
                    <div className="project-header">
                        <h3>La Chouette Agence</h3>
                    </div>
                    <div className="project-body">
                        <div className="project-body-goal">
                            <p><strong>Optimisation</strong> d'un site web existant (accessibilité, SEO, performance)</p>
                        </div>
                        <div className="technos">
                            <span><SiHtml5 fill="#D66538" title="HTML" /></span>
                            <span><SiCss3 fill="#4397C9" title="CSS" /></span>
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