function Contact() {
    return (
        <section className="contact">
            <div className="contact-header">
                <h2>Me contacter</h2>
            </div>
            <div className="contact-body">
                <p>Tous les champs sont obligatoires.</p>
                <form action="https://formsubmit.co/julien.jesionek@gmail.com" method="POST">
                    <div className="field">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="user_name" placeholder="Votre nom" required></input>
                    </div>
                    <div className="field">
                        <label htmlFor="mail">Adresse mail</label>
                        <input type="email" id="mail" name="user_mail" placeholder="Votre adresse mail" required></input>
                    </div>
                    <div className="field">
                        <label htmlFor="object">Sujet</label>
                        <input type="text" id="object" name="user_object" placeholder="Sujet de votre message" required></input>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="user_message" placeholder="Votre message" required></textarea>
                    </div>
                    <div className="button">
                        <button type="submit" className="btn">Envoyer !</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;