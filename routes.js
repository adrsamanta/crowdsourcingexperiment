Router.configure({
  //TODO add loading template
    onBeforeAction: function () {
        if (!Meteor.userId()){
            this.render('login');
        }
        else {
            this.next();
        }
    }
});

Router.route('/', function () {
    console.log("accessed base route, going to tutorial");
   Router.go("/tutorial");
});

Router.route('/tutorial', {
    name: "tutorial"
});

Router.route('/lobby', function () {
    let status = experimentInProgress()
    if (status){
        this.render("lateArrival");
    }
    else{
        this.render("lobby");
    }
}, {
    name: "lobby"
});

Router.route('/game');

