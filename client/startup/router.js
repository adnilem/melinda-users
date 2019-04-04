//Importer les packages
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//Info dans la doc FlowRouter classique et extra 
//Route test
FlowRouter.route('/test', {
    action() {
        console.log('Route test !');
    }
});

//Remplacer le body par une route !
//Création d'une route a la racine qui affiche le templace navbar
FlowRouter.route('/', {
    action() {
        BlazeLayout.render('navbar');
    }
});