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
        if (isAdmin()){
            distributeUsersToGroups();
            //other things to TBD
        }
    }
});


var distributeUsersToGroups = function () {
    let users = getUsersInExperiment();
    let numGroups = getNumGroups(), usersPerGroup = getUperG();
    if (users.count!= usersPerGroup*numGroups){
        //problem, uneven split
        //TODO log error as needed
        console.log("users do not split evenly into groups!!");
    }
    //shuffle the users so theyre in a random
    shuffle(users);
    //clear the user groups collection
    userGroups.remove({});

    let userI = 0;
    for (let i = 0; i<numGroups; ++i){
        let newUIDs=[];
        for (let j = 0; j<usersPerGroup && userI<users.count; ++j, ++userI){
            newUIDs.append(users[userI]);
        }
        userGroups.insert({userids: newUIDs});
    }
};

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}