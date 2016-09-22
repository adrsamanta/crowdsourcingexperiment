/**
 * Created by alan on 9/22/2016.
 */

Accounts.onCreateUser(function (options, user) {

});

//exists in case this needs to change later, want it refactored out here
function getUsersInExperiment(){
    return Meteor.users.find({username: {$ne: "admin"}});
}