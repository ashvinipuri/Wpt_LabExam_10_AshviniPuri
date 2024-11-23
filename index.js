var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var db = require("./database/db.js");
db();
console.log("database connected");

var Schema = mongoose.Schema;

var DeliverySchema = new Schema({
  id: Number,
  dDate: Number,
  dAdd: String,
  dFee: Number
 
});

var DeliveryModel = mongoose.model("deliverys", DeliverySchema);
var app = express();
app.use(cors());
app.use(express.json());

app.get("/getdata", async (request, response) => {
  try {
    var result = await DeliveryModel.find();
    response.send(result);
  } catch (err) {
    response.send(err.message);
  }
});

app.post("/addData", async (request, response) => {
  try {
    var result = DeliveryModel(request.body);
    var ans = await result.save();
    response.send("data inserted");
  } catch (err) {
    response.send(err.message);
  }
});

app.put("/update/:id", async (request, response) => {
  try {
    await DeliveryModel.updateOne({ id: request.params.id }, { $set: request.body });
    response.send(request.params.id + "Updated ");
  } catch (err) {
    response.send(err.message);
  }
});

app.delete("/delete/:id", async (request, response) => {
  try {
    await DeliveryModel.deleteOne({ id: request.params.id });
    response.send(request.params.id + "deleted");
  } catch (err) {
    response.send(err.message);
  }
});
app.listen(9000);