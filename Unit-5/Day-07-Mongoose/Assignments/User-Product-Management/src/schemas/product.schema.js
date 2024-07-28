const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({

    productName : {
        type : "String",
        required : true
    },

    brand : {
        type : "String",
        required : true
    },

    category : {
        type : "String",
        required : true
    },
    color: "String",

    sellingPrice : {
        type : "Number",   
        required : true
    },

    originalPrice : {
        type : "Number",
        required : true
    },

    description : {
        type : "String",
        required : true
    }
})

module.exports = productSchema;