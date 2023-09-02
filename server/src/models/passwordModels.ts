import { Schema, model } from "mongoose";


const passwordSchema =new Schema({
    password: {
        type:String,
        required : true
    }
})

const passwordModel = model('uniquePassword',passwordSchema)
export default passwordModel