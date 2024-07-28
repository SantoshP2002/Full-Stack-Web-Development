const ProductModel = require("../../models/product.model");

const getAllProductController = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({
            success: true,
            message: "All products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Failed to fetch products",
            error: error.message || error,
        });
    }
};
module.exports = getAllProductController