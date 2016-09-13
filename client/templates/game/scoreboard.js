/**
 * Created by alan on 9/13/2016.
 */

Template.scoreboard.helpers({
    "scores": function () {
        let user = Meteor.user();
        let userGroup = userGroups.find({users: {$in: [user.id]}});
        let neighbor_users = [];
        userGroup.forEach(function (e) {
            neighbor_users.concat(e.userids);
        });

        return scoreCollection.find({userid: {$in: neighbor_users}});
    },
    "myScore": function () {
        return this.userid == Meteor.userId();
    }
});