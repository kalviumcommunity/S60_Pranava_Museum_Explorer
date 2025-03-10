
const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const data = require("./data")

function dataBaseConnection() {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("connection success")
        })
        .catch((error) => {
            console.log("connection failed")
            console.log(error)
        })
}

const mongooseSchema = new mongoose.Schema({
    Museum_Name: String,
    Museum_Image_Link: String,
    Location: String,
    Description: String,
    Specialty: String,
    Rating: Number,
})

const userSchema = new mongoose.Schema({
    User_Name : String,
    Email : String,
    Password : String
})

const userProfile = new mongoose.Schema({
    Location : String,
    Hobby : String,
    Bio : String,

})

const modelData = mongoose.model('Museum_Data', mongooseSchema)
const modelUserData = mongoose.model('User_Data', userSchema)
// modelData.insertMany(data).then(() =>{console.log("connected")})
const profileData = mongoose.model('Profile_Data',userProfile)

module.exports = {modelData:modelData, connectiondata:dataBaseConnection,userData:modelUserData, User_Profile:profileData}
