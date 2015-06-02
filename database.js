var pg = require('pg');

var database = {};

database.init = function(){
        var env;
        try {
            var config = require('./config');
        } catch (e){
            env = "dev";
        }

        if (env == "dev") {
            this.db_parameters = {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PWD,
                database: process.env.DB_NAME,
                ssl: true
            };
            this.token_secret = process.env.TOKEN_SECRET;
        } else {
            this.db_parameters = {
                host: config.DB_HOST,
                user: config.DB_USER,
                password: config.DB_PWD,
                database: config.DB_NAME,
                ssl: true
            };
            this.token_secret = config.TOKEN_SECRET;
        }
    };

database.newDbConnection= function(){
        database.init();
        return new pg.Client(this.db_parameters);
    };

module.exports = database;
