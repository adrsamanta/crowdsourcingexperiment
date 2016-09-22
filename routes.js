Router.configure({
  //TODO add loading template
    onBeforeAction: function () {
        if (!Meteor.userId()){
            this.render('login');
        }
    }
});


Router.route('/tutorial', {
    name: "tutorial"
});

Router.route('/lobby', function () {
    let status = experimentInProgress();
    if (status){
        this.render("lateArrival");
    }
    else{
        this.render("lobby");
    }
}, {
    name: "lobby"
});

