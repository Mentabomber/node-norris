const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;

const url = "https://api.chucknorris.io/jokes/random";

const fetchData = () => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(data => console.log(data));
    };

fetchData();

http.listen