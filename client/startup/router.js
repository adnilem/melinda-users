//Importer les packages
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//Info dans la doc FlowRouter classique et extra 
FlowRouter.route('/test', {
    action() {
        console.log('Route test !');
    }
});