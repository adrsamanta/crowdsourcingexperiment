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
            setAllScores(0);
            experimentStatus.insert({
                name: "experimentInProgress",
                value: true
            });
            //other things to TBD
        }
    }
});


var setAllScores = function (baseScore) {
    let users = getUsersInExperiment();
    scoreCollection.remove({});
    users.forEach(function (user) {
        scoreCollection.insert({
            score: baseScore,
            userid: user._id
        });
    });
};


var distributeUsersToGroups = function () {
    let users = getUsersInExperiment().fetch();
    let numGroups = getNumGroups(), usersPerGroup = getUperG();
    if (users.length!= usersPerGroup*numGroups){
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
        for (let j = 0; j<usersPerGroup && userI<users.length; ++j, ++userI){
            newUIDs.push(users[userI]._id);
        }
        console.log("adding user group");
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