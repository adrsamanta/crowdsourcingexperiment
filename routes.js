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
    let status = experimentStatus.findOne({type: "experimentInProgress"})
    if (status!=null && status.value){
        this.render("lateArrival");
    }
    else{
        this.render("lobby");
    }
}, {
    name: "lobby"
});

