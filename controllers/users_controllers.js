const usermodel = require("../models/usersmodels")

const registeruser  = async(req,res)=>{

        try {
            const {name , username , password} = req.body
            usermodel.create({
                name  :name ,
                username : username,
                password : password
                
            })
            res.status(200).json({
                "statuscode" :200,
                "Success" :true,
                "message" :"User Registerd Successfully",
                "data" : {
                    "token" : "hddduenbxwycbsnqunnsuakbcxcbeyjyf"
                }
            })
        } catch (error) {
            res.status(500).json({
                "statuscode" :500,
                "Success" :false,
                "message" :"Internal Server Error",
                "data" : {
                    "Error" : error.message
                }
            })
        }
}

module.exports = {registeruser}