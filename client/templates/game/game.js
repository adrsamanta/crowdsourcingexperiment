/**
 * Created by alan on 9/13/2016.
 */

Template.game.helpers({
    'incrementScore': function () {
        let user = Meteor.userId();
        let score = scoreCollection.findOne({userid: user});
        score.score+=1;
        scoreCollection.update(score.id, {$set: score}, function (error) {
           if (error){
               alert(error.reason);
           } else{
               //no-op
           }
        });
    }
});