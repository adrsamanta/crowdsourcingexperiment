/**
 * Created by alan on 9/13/2016.
 */



//declares all collections for the app

//holds config data (number of user groups, max users, etc)
configInfo = new Mongo.Collection("ConfigInfo");

//holds the scores for each user
scoreCollection = new Mongo.Collection("scores");

//holds user groups for the game
userGroups = new Mongo.Collection("UserGroups");

//experiment status info
experimentStatus = new Mongo.Collection("ExperimentStatus");