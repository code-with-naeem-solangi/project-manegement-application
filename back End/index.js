const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());
var bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
const { Prodectes, newProdect, prodectDelete, EditProdect } = require("./app");

app.get("/", (req, res) => {
  const prodectList = Prodectes();
  res.send(prodectList);
});
app.post("/new-prodect", (req, res) => {
  const newProdectList = newProdect(req.body);
  res.send(newProdectList);
});
app.delete("/prdct/:pid", (req, res) => {
    const {pid} = req.params;
    console.log(pid)
    const card = prodectDelete(pid)
    if (card) {
      res.send({
        message :"Prodect Delete SuccesFull"
      })
      return;
    }
    res.status(500)
    res.send({
      message :"Prodect Delete Not Scusses"
  
    })     
  });
  app.put("/prdct/prdct-edit", (req, res) => {
    const prdt = req.body;
    const prodect = EditProdect(prdt);
    if (prodect) {
      res.send({
        message: "Contact Updated",
      });
      return;
    }
    res.status(500);
    res.send({
      message: "Contact Not found ",
    });
  });
app.listen(port, (err) => {
  if (err) {
    console.log("error", err);
    return;
  }
  console.log(`Example app listening on port ${port}`);
});
