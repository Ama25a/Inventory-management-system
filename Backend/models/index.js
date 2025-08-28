const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/TASK"
// "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };