/**
 * Created by alan on 9/13/2016.
 */



//declares all collections for the app

// numPlayersStr='numPlayers';
// numUserGroupsStr = "numUserGroups";
// numPerGroupStr = "numPerGroups

//holds config data (number of user groups, max users, etc)
//to access data, call functions in ConfigFetchers
//documention still here for reference
configInfo = new Mongo.Collection("ConfigInfo");
/*
each of these is stored as name, value
so configInfo.find({name: <name>}) will work
    numPlayers: number of players in this group
    numUserGroups: number of groups per session
    numPlayersPerGroup: number of players

*/
//holds the scores for each user
scoreCollection = new Mongo.Collection("scores");
/*
format:
{
    id
    score: number that is the score
    userid: the userid of the user whos score this is
 */

//holds user groups for the game
userGroups = new Mongo.Collection("UserGroups");
/*
format:
{
    id
    userids: [list of user ids in the group
}
 */


//experiment status info
experimentStatus = new Mongo.Collection("ExperimentStatus");/*
Once again, can see functions in ConfigFetchers
stored as name, value pairs, like config

    experimentInProgress: whether an experiment has started
 */