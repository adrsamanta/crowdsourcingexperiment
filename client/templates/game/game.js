/**
 * Created by alan on 9/13/2016.
 */

Template.game.events({
    "click #yolobtn"(event) {
        let user = Meteor.userId();
        let score = scoreCollection.findOne({userid: user});
        console.log(score._id);
        let newScore = {
            score: score.score+1
        };
        scoreCollection.update(score._id, {$set: newScore}, function (error) {
            if (error) {
                alert(error.reason);
            } else {
                console.log("updated");
            }
        });
    }

});

