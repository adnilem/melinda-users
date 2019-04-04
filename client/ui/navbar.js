import './navbar.html';


Template.navbar.events({
    //Pour montrer le formulaire de login/sign in quand l'utilisateur clique sur btn connexion
    'click .js-open-login-modal'(event, instance) {
        Modal.show('loginModal');
    },
    //Pour se déconnecter quand click sur btn déconnexion
    'click .js-logout'(event, instance) {
        Meteor.logout();
    }
});

//Pour fermer le formulaire de connexion (modal) si l'utilisateur est connecté
//La fonction autorun va se réexecuter si Meteor.userId() change = si l'utilisateur change de statut connecté/déconnecté
Template.loginModal.onCreated(function() {
    this.autorun(() => {
        if(Meteor.userId()){
            Modal.hide('loginModal');
        }
    });
});