const app = require("./index.js");

const connect = require("./configs/db");

app.listen(2456, async function () {

    await connect();

    console.log("Listening to port 2456");
})