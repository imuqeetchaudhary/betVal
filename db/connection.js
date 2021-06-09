const mongoose = require("mongoose")

exports.connection = mongoose.connect("mongodb://localhost:27017/betVal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})