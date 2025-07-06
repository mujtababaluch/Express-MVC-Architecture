const mongoose = require('mongoose')

const dbconnect = ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/student-management")
            console.log("MongoDB connected");
} catch (error) {
    console.log("Error :",error)
    process.exit(1)
}
}

module.exports = dbconnect