/**
 * Created by alan on 9/22/2016.
 */

/*
    for configInfo
 */
getNumPlayers = function() {
    return configInfo.findOne({name: "numPlayers"}).value;
};

getNumGroups = function() {
    return configInfo.findOne({name: "numUserGroups"}).value;
};

//users per group
getUperG =function() {
    return configInfo.findOne({name: "numPlayersPerGroup"}).value;
};


/*
    for experimentStatus
 */

experimentInProgress = function(){
    let status = experimentStatus.findOne({name: "experimentInProgress"});
    //make sure its not null and has a value
    return status && status.value;
};