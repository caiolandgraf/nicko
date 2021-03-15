const fs = require("fs");
let dir = "./components/";

module.exports = commandRequest (prefix, add) => {
    var commands = {};

    if (add) {
        dir = dir+add+"/"
    }

    const scripts = fs.readdirSync(dir);

    scripts.forEach(script => {
        commands[prefix + script.split(".")[0]] = require("../../" + dir + script);
    });


    return commands;
}