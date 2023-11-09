const fs = require("fs");
const path = require("path");
const loadAjaxData = require("./utilities/loadAjaxData");


function pushContent() {
    const contentsPath = path.join(__dirname, "../contents", "norrisDb.json");

    try {
        /**
        * @type {string}
        */
        const jokes = fs.readFileSync(console.log(loadAjaxData()), "utf-8");
    } catch (error) {
        
    }
}