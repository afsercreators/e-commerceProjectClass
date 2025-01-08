const Products = require("../Model/ProductModel");

const CreateProduct = async (req, res) => {
  try {
    const {
      name,
      productCategory,
      productRegPrice,
      ProductDiscountPrice,
      ProductDetails,
    } = req.body;

    if (
      !name ||
      !productCategory ||
      !productRegPrice ||
      !ProductDetails ||
      !ProductDiscountPrice
    ) {
      return res
        .status(400)
        .json({ message: "Please provide the required fields" });
    }

    const productObj = new Products({
      name,
      productCategory,
      productRegPrice,
      ProductDiscountPrice,
      ProductDetails,
    });

    await productObj.save();

    res.json({
      message: "Products created successfully",
      productObj,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the student.",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const productsobj = await Products.find();
    res.status(200).json(productsobj);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while get user.",
      error: error.message,
    });
  }
};

async function deletProduct(req, res) {
  const { id } = req.params;

  try {
    const newProducts = await Products.findByIdAndDelete({ _id: id });
    res.status(200).json({
      newProducts,
    });
  } catch (error) {
    console.error(errmsg);
    res.status(500).json({
      message: "An error occurred while updating the users",
    });
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;

  try {
    const updatedProducts = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProducts) {
      return res.status(404).json({
        message: "Products not found",
      });
    }
    res.status(200).json({
      updatedProducts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while updating the Users",
    });
  }
}

async function getOneProduct(req, res) {
  const { id } = req.params;

  try {
    const products = await Products.findById({ _id: id });
    if (!products) {
      return res.status(404).json({
        message: "Products not found",
      });
    }
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while updating the Users",
    });
  }
}

module.exports = {
  CreateProduct,
  getProduct,
  getOneProduct,
  deletProduct,
  updateProduct,
};
