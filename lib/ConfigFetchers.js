/**
 * Created by alan on 9/22/2016.
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