const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
         
    {
        productName: { type: String, required: true },
        
        topDescription: {
            title: { type: String, required: true },
            headline: { type: String, required: true },
            description: { type: String, required: true },
        },

        bottomDescription: {
            headline: { type: String, required: true },
            descriptinn: { type: String, required: true },
        },

        allProductsData: {

            Img: { type: String, required: true },
            hoverImg: { type: String, required: true },
            title: { type: String, required: true },
            dimensions: { type: String, required: true },
            price: { type: String, required: true },
            sold: { type: String, required: true },

            varient: [
                {
                    img: { type: String, required: true },
                }
            ],

            productDetailPage: [
                {
                    img: { type: String, required: true },
                }
            ],

        }

    },
        
    
    
    {
        versionKey: false,
        timestamps: true
    }
);
module.exports = mongoose.model("products", productSchema);