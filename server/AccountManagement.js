/**
 * Created by alan on 9/22/2016.
 */

Meteor.startup(function() {
    Meteor.users.allow({
        update: function(userId, doc, fields, modifier) {
            if(userId && doc._id === userId)
                return true;
        }
    });


    var users = ["u1", "u2", "ADP7UNGJZKRSK", "A1JLCB7YCJSNXQ", "A26XN1TM6CV01T", "A38DC3BG1ZCVZ2", "A3I3JQX0P2F0K3", "A2W1C5PDHUF25O", "A1FSPD1LIOXCN1", "A39C3299FW5PTO", "AW0K78T4I2T72", "A1SO9R81HMMIQD", "A376BI2RNUIFRH", "A2ZJS73XSSMRTD", "A28LE67Q1YR9TV", "AK3H5QRAROFGP", "A19CB2C4GY4C60", "A19TL7AJ0FB1JG", "AMYURTQIMAC8T", "A3NKA0NIM0TX5C", "A1FBO95OVBYOH1", "A2U6D0T6GFXZIF", "A1V6P1ZE6Q8YEW", "AGBDM85RLYTGL", "A15PUZKRWJH0EY", "A3R25SV8HUGML2", "A2J6WFWSKTYJQM", "A3770CWO9OHZDN", "A3AE627X3R2JQI", "AUQTHU5AOZVQC"];

    var password = "pswd";

    // var users   = ["AGBDM85RLYTGL", "A1TQ5B2S7CQ5L1", "AUQTHU5AOZVQC", "AN3KR7C1SLYY3", "A1N4AZ1QXPOPXH", "A3R25SV8HUGML2", "AFDC9A6Z60W2Z", "A2MG1LLIKMGAMX", "A1XMFODRPFWKJ7", "A251BVRUXN0QRW", "A2O5OJXCUFQ3FV", "A3KVH7IYW9XEJX", "AJD3JOWNVDZD1", "A2541C8MY0BYV3", "AQVXVMX61864S", "A1YM0IWPC72J7V", "AND381S2NK11X", "AK7LGB1QOGA1P", "A149ROBL26JWPJ", "A173LV77LF3SHB", "A2G7N0X0PNX0EE", "A1OQ3KL56KMQSU", "A15PUZKRWJH0EY", "A2PXJTMWGUE5DC", "A2U6D0T6GFXZIF", "A2AQBLOIEWAYJD", "A2J6WFWSKTYJQM", "A333STM8M95GJX", "A3AE627X3R2JQI", "A3MUWBUFV8TC9K", "A3QJ14Y7N8VQ42", "AMDX0UNZS4A1G", "A1JVUD5XUB9H48", "A34D413HR7ZIFM", "AO0CQ0WT4FT7T", "A18TCR555RWUZV", "A1V6P1ZE6Q8YEW", "A25UBZ4Q8KORO8", "A3O2NOP1NUWCWL", "A3V70AZ39FPZ5V", "A1IFF4KV23FGHJ", "A1BZC4P1LTSFW1", "A3770CWO9OHZDN"]
    // var password = "dc1102experiment";


    Meteor.call('addUserAccounts', users, password);

});


Meteor.methods({
    addUserAccounts: function(arrOfUsers, password) {
        function checkType(variable, type, message) {
            if(typeof(variable) !== type) {
                throw message;
            }
        }



        for(var idx in arrOfUsers) {
            var user = arrOfUsers[idx];

            if( Meteor.users.find({username: user}).count() === 0 ) {
                checkType(user, "string", "ERROR: (Adding User) User should be a string");

                Accounts.createUser({
                    username: user,
                    password: password
                })
            } else {

                console.log("User " + user + " has already been added");
            }
        };

        var hasAdminUser = Meteor.users.find({username: "admin"}).count() === 1;
        if (!hasAdminUser) {
            Accounts.createUser({
                username: "admin",
                password: "admin",
            });

        }
    }
});



//exists in case this needs to change later, want it refactored out here
getUsersInExperiment =function(){
    return Meteor.users.find({username: {$ne: "admin"}});
};