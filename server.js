const http = require("http");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const loadAjaxData = require("./utilities/loadAjaxData");


dotenv.config();

const port = process.env.PORT || 3000;

const serverAsync = http.createServer((req, res) => {
    pushContent();
});
  
serverAsync.listen(port, () => {
console.log(`Server running at port ${port}`);
});
function pushContent() {
    const contentsPath = path.join(__dirname, "./contents", "norrisDb.json");

    try {
        const jokes = loadAjaxData((data) => {
            const existingData = JSON.parse(fs.readFileSync(contentsPath, "utf-8"));
            console.log(existingData);
            existingData.push(data);
            fs.writeFileSync(contentsPath, JSON.stringify(existingData, null, 2));
        });

        
    
        
       
        // const jokes = fs.readFileSync(loadAjaxData(({value}) => {
        // }), "utf-8");
        // console.log(jokes);
        // return JSON.parse(jokes);

    } catch (error) {
        console.log(error.message);
        return [];
    }
}


