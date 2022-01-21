const app = require("./src/index");

const connect = require("./src/configs/db");

app.listen(process.env.PORT || 5000, async () => {
  await connect();
  console.log("Listining to port 5000");
});
