/**
 * Created by alan on 9/22/2016.
 */

/*
    for configInfo
 */
function getNumPlayers() {
    return configInfo.find({name: "numPlayers"}).value;
}

function getNumGroups() {
    return configInfo.find({name: "numUserGroups"}).value;
}

//users per group
function getUperG() {
    return configInfo.find({name: "numPlayersPerGroup"}).value;
}


/*
    for experimentStatus
 */

function experimentInProgress(){
    let status = experimentStatus.findOne({name: "experimentInProgress"});
    //make sure its not null and has a value
    return status && status.value;
}