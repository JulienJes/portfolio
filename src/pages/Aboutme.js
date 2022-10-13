import Seeprojects from '../components/cv/Seeprojects';

function About () {
    return (
        <>
        <section className="about">
            <div className="container">
                <div className="infos">
                    <div className="photo">
                        <img src="./img/photo/julienjesionek.webp" alt="Julien Jesionek"></img>
                    </div>
                    <div>
                        <div className="infos-title">
                            <h2>Informations</h2>
                        </div>
                        <div className="infos-body">
                            <p>Ancien chasseur de tête, je suis désormais développeur web: j'ai développé mes compétences en HTML, CSS,
                                Javascript et ai réalisé des projets en React.JS.
                                Je compte exprimer ma créativité au sein d'une structure désireuse d'apporter ou d'entretenir de l'adaptabilité,
                                de l'organisation ou une effervescence collaborative au sein de ses équipes. Je m’intéresse particulièrement aux opportunités luxembourgeoises
                                et des grandes villes françaises. Que ce soit pour aujourd'hui ou pour demain, je serai ravi d'échanger avec vous sur les enjeux du web !</p>
                        </div>
                    </div>
                </div>
                <div className="career">
                    <div className="wd">
                        <div className="head fadein--1">
                            <h2>Développement Web</h2>
                            <p>- Depuis 2021</p>
                        </div>
                        <div className="cards">
                            <div className="card fadein--2">
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/logo/logo.webp" alt="aperlead"/>
                                            <h3>Freelance - Développeur Web</h3>
                                        </div>
                                        <p>Distanciel</p>
                                        <p>3 mois</p>
                                    </div>
                                    <div className="card-details">
                                        <p>3 projets dont 2 en-cours.</p>
                                        <p>Pour complêter mes connaissances, je réalise des projets sur les technos que je n'ai pas vu chez OpenClassrooms tels que <strong>MySQL</strong>, <strong>Wordpress</strong>, etc.</p>
                                        {/*<div className="technos">
                                            <span className="react">React.JS</span>
                                            <span className="javascript">Javascript</span>
                                            <span className="node">Node.JS</span>
                                            <span className="express">Express.JS</span>
                                            <span className='mysql'>MySQL</span>
                                            <span className="sass">SASS</span>
                                            <span className="wordpress">Wordpress</span>
                                        </div>*/}
                                    </div>
                                </div>
                                <Seeprojects />
                            </div>
                            <div className="card fadein--3">
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/experiences/OC.webp" alt="OpenClassrooms"/>
                                            <h3>OpenClassrooms - Développeur Web</h3>
                                        </div>
                                        <p>Distanciel</p>
                                        <p>8 mois</p>
                                    </div>
                                    <div className="card-details">
                                        <p>6 projets réalisés.</p>
                                        <p>De projets front à des projets fullstack en passant par le back, j'ai développé mes connaissances sur plusieurs technos tout en étant grandement sensibilisé à l'<strong>accessibilité</strong>, le <strong>SEO</strong>, la <strong>performance</strong> et la <strong>maintenabilité</strong> du code.</p>
                                        {/*<div className="technos">
                                            <span className="react">React.JS</span>
                                            <span className="javascript">Javascript</span>
                                            <span className="node">Node.JS</span>
                                            <span className="express">Express.JS</span>
                                            <span className="mysql">MySQL</span>
                                            <span className="mongodb">MongoDB</span>
                                            <span className="html">HTML5</span>
                                            <span className="css">CSS3</span>
                                            <span className="sass">SASS</span>
                                            <span className="wordpress">Wordpress</span>
                                        </div>*/}
                                    </div>
                                </div>
                                <Seeprojects />
                            </div>
                        </div>
                    </div>
                    <div className="hh">
                        <div className="head fadein--4">
                            <h2>Recrutement</h2>
                            <p>- 2014 - 2021</p>
                        </div>
                        <div className="cards">
                            <div className="card fadein--5">
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/experiences/aperlead.webp" alt="aperlead"/>
                                            <h3>Aperlead - Manager Recherche</h3>
                                        </div>
                                        <p>15 personnes - 2M€ CA - Paris</p>
                                        <p>3 ans et demi</p>
                                    </div>
                                    <div className="card-details">
                                        <p><strong>Chasse de têtes opérationnelle</strong> et <strong>management d’une équipe de 4 personnes</strong> (dont une basée au Canada). 
                                            Intégration, formation des collaborateurs, création de KPI, refonte de la rémunération variable, Key user AD-Men, gestion des prestataires
                                            (et négociation des prix), mise en conformité RPGD et DPO, amélioration continue des méthodes, process et reportings, ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card fadein--6">
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/experiences/AlexanderHughes.webp" alt="Alexander Hughes"/>
                                            <h3>Alexander Hughes - Chargé de recherche</h3>
                                        </div>
                                        <p>130 personnes - 10M€ CA - Paris</p>
                                        <p>3 ans et demi</p>
                                    </div>
                                    <div className="card-details">
                                        <p><strong>Chasse de tête</strong>, qualifications de candidats (CV, téléphone, entretiens en face à face)
                                            et suivi des missions de recrutement dans des secteurs et métiers variés en <strong>France et à l'international</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <div className="head fadein--7">
                        <h2>Formation initiale</h2>
                        <p>- 2008 - 2014</p>
                    </div>
                    <div className="education-body">
                        <div className="cards">
                            <div className="card fadein--8">
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/experiences/ESC.webp" alt="ESC Clermont"/>
                                            <h3>ESC Clermont</h3>
                                        </div>
                                        <p>Clermont-Ferrand (France)</p>
                                        <p>4 ans dont une de césure</p>
                                    </div>
                                    <div className="card-details">
                                        <p>Programme Grande Ecole de commerce avec 4 stages réalisés, majoritairement en recrutement.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card fadein--9">
                                <div className="card-image"> 
                                </div>
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/experiences/Washington.webp" alt="University of Washington"/>
                                            <h3>University of Washington</h3>
                                        </div>
                                        <p>Seattle (USA)</p>
                                        <p>5 mois</p>
                                    </div>
                                    <div className="card-details">
                                        <p>Semestre d'échange pour deux programmes de perfectionnement en anglais orientés business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card fadein--10">
                                <div className="card-body">
                                    <div className="card-header">
                                        <div className="card-header-title">
                                            <img src="./img/experiences/IUT.webp" alt="IUT de Metz"/>
                                            <h3>IUT de Metz - DUT GEA</h3>
                                        </div>
                                        <p>Metz (France)</p>
                                        <p>2 ans</p>
                                    </div>
                                    <div className="card-details">
                                        <p>2 stages réalisés en RH.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;