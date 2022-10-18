function OnClick () {
    let answer = window.confirm("Ce lien mène vers un site externe, souhaitez-vous l'ouvrir dans un nouvel onglet?")
    if(answer === true) {
        window.open(this.href, "target='_blank' rel='noopener noreferrer'");
    }
};

export default OnClick;