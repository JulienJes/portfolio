import { NavLink } from "react-router-dom";

function Home () {
    return (
        <section className="home">
            <div className="home-header">
                <h2>Bienvenue !</h2>
            </div>
            <div className="home-body">
                <p>Je suis Julien Jesionek, Développeur Web.</p>
                <p>Vous visitez actuellement le site de présentation de mon profil.</p>
                <p>Si vous êtes ici, c'est probablement parce que j'ai candidaté pour rejoindre votre entreprise ou que l'on vous a parlé de moi.</p>
                <p>Dans tous les cas, cela vous intéressera de visiter les pages <NavLink exact="true" to="/aboutme">Qui suis-je?</NavLink> et <NavLink exact="true" to="/portfolio">Portfolio</NavLink>.</p>
            </div>
            <div className="home-button">
                <NavLink exact="true" to="contact" className={"btn"}>Contactez-moi !</NavLink>
            </div>
        </section>
    );
};

export default Home;