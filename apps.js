
const express = require("express");
const mongoose = require("mongoose");
const inscricaoRoutes = require("./routes/inscricaoRoutes");
const galeriaRoutes = require("./routes/galeriaRoutes");
const programaRoutes = require("./routes/programaRoutes");
const app = express();

app.use(express.json());
app.use(express.static("views"));

const atlasConfig = {
  username: "mem",
  password: "esmad",
  dbname: "DriveWebsite",
  url: "ryfydnj.mongodb.net",
};

const uri = `mongodb+srv://${atlasConfig.username}:${atlasConfig.password}@${atlasConfig.dbname}.${atlasConfig.url}/${atlasConfig.dbname}?retryWrites=true&w=majority`;

 

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/add-inscricao", inscricaoRoutes);
app.use("/newphoto", galeriaRoutes);
app.use("/create_speaker", programaRoutes);

app.listen(3001, () => console.log("Server is up on port 3001"));