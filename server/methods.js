/**
 * Created by alan on 9/13/2016.
 */

//returns if the current user is admin
var isAdmin = function () {
    var adminUser = Meteor.users.findOne({username: "admin"});
    return !!adminUser;
};

Meteor.methods({
    startExperiment: function () {

    }
});


