const fs = require("fs");
const path = require("path");
const loadAjaxData = require("./loadAjaxData");
const existingDataIds = [];

function pushContent() {
    const contentsPath = path.join(__dirname, ".././contents", "norrisDb.json");

    try {
        const jokes = loadAjaxData((data) => {
            const existingData = JSON.parse(fs.readFileSync(contentsPath, "utf-8"));
            console.log(existingData);
            existingDataIds.push(data.id);
            console.log(existingDataIds,"array degli id dei joke");
            console.log(data.id, "id del nuovo joke");
           
                existingData.push(data);
                fs.writeFileSync(contentsPath, JSON.stringify(existingData, null, 2));
            //  while (!existingDataIds.includes(data.id)) 
        
            
        });

    } catch (error) {
        console.log(error.message);
        return [];
    }
}

module.exports = pushContent;