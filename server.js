const http = require("http");
const dotenv = require("dotenv");
const pushContent = require("./utilities/pushContent");


dotenv.config();

const port = process.env.PORT || 3000;

const serverAsync = http.createServer((req, res) => {
    pushContent();
});
  
serverAsync.listen(port, () => {
console.log(`Server running at port ${port}`);
});



