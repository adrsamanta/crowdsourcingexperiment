/**
 * Created by alan on 9/22/2016.
 */

/*
    for configInfo
 */
getNumPlayers = function() {
    return configInfo.find({name: "numPlayers"}).value;
};

getNumGroups = function() {
    return configInfo.find({name: "numUserGroups"}).value;
};

//users per group
getUperG =function() {
    return configInfo.find({name: "numPlayersPerGroup"}).value;
};


/*
    for experimentStatus
 */

experimentInProgress = function(){
    let status = experimentStatus.findOne({name: "experimentInProgress"});
    //make sure its not null and has a value
    return status && status.value;
};