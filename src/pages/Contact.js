function Contact() {
    return (
        <section className="contact">
            <div className="contact-header">
                <h2>Me contacter</h2>
            </div>
            <div className="contact-body">
                <form action="https://formsubmit.co/julien.jesionek@gmail.com" method="POST">
                    <div>
                        <label for="name">Nom</label>
                        <input type="text" id="name" name="user_name" placeholder="Votre nom"></input>
                    </div>
                    <div>
                        <label for="mail">Adresse mail</label>
                        <input type="email" id="mail" name="user_mail" placeholder="Votre adresse mail"></input>
                    </div>
                    <div>
                        <label for="object">Sujet</label>
                        <input type="text" id="object" name="user_object" placeholder="Sujet de votre message"></input>
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea id="msg" name="user_message" placeholder="Votre message"></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">Envoyer !</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;