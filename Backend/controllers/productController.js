const asyncHandler = require("express-async-handler");
const slugify =require("slugify");
const cloudinary =require("cloudinary").v2;
const Product = require("../models/productModel");
const BiddingProduct = require("../models/biddingProductModel");

const createProduct = asyncHandler(async(req,res) => {
    const {
        title,
        description,
        startingBid,
        category,
        height,
        lengthpic,
        width,
        materialUsed,
        weight,} = req.body;

        const userId = req.user.id;

        const originalSlug = slugify(title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
            strict: true,
          });
        
          let slug = originalSlug;
          let suffix = 1;
        
          while (await Product.findOne({ slug })) {
            slug = `${originalSlug}-${suffix}`;
            suffix++;
          }
        
          if (!title || !description /*|| !startingBid*/) {
            res.status(400);
            throw new Error("Please fill in all fields");
          }

          let fileData={};
          if(req.file) {
            let uploadedFile
            try {
                    uploadedFile =await cloudinary.uploader.upload(req.file.path,{
                    folder: "Bidding/Product",
                    resource_type:"image",
                });
            } catch (error) {
              console.error("Cloudinary upload error:", error); // Log the actual error for debugging
              res.status(400);
              throw new Error("Image could not be uploaded. Error: " + error.message);
          }

            fileData = {
                fileName: req.file.originalname,
                filePath: uploadedFile.secure_url,
                fileType: req.file.mimetype,
                public_id: uploadedFile.public_id,
              };
          }



          const product = await Product.create({
            user: userId,
            title,
            slug: slug,
            description,
            startingBid,
            category,
            height,
            lengthpic,
            width,
            materialUsed,
            weight,
            image:fileData,
          });
          res.status(201).json({
            success: true,
            data: product,
          });
});

const updateProduct = asyncHandler(async (req, res) => {
  const { title, description, price, height, lengthpic, width, mediumused, weigth } = req.body;
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  let fileData = {};
  if (req.file) {
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Product-Images",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Image colud not be uploaded");
    }

    if (product.image && product.image.public_id) {
      try {
        await cloudinary.uploader.destroy(product.image.public_id);
      } catch (error) {
        console.error("Error deleting previous image from Cloudinary:", error);
      }
    }
    //step 1 :
    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      public_id: uploadedFile.public_id,
    };
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    { _id: id },
    {
      title,
      description,
      price,
      height,
      lengthpic,
      width,
      mediumused,
      weigth,
      image: Object.keys(fileData).length === 0 ? Product?.image : fileData,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json(updatedProduct);
});

const test = asyncHandler(async(req,res) => {
  res.send("test");
});

const getProduct = asyncHandler(async(req,res) => {
  const {id} = req.params;

  const product= await Product.findById(id);

  if(!product){
    res.status(404);
    throw new Error("Product not found");
  }
  
  res.status(200).json(product);
});

const deleteProductsByAdmin = asyncHandler(async(req,res) => {
  const { productIds }=req.params;
  const product= await Product.findById(productIds);

  if(!product){
    res.status(404);
    throw new Error("Product not found");
  }

  if(product.image && product.image.public_id){
    try {
      await cloudinary.uploader.destroy(product.image.public_id)
    } catch (error) {
      console.log(error)
      res.status(500);
    throw new Error("Error deleting image from cloudinary");
    }
  }

  await Product.findByIdAndDelete(productIds);
  res.status(200).json({message:"Product deleted successfully"});

});

const getAllProductsByAdmin = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort("-createdAt").populate("user");

  const productsWithPrices = await Promise.all(
    products.map(async (product) => {
      const latestBid = await BiddingProduct.findOne({ product: product._id }).sort("-createdAt");
      const biddingPrice = latestBid ? latestBid.price : product.price;
      return {
        ...product._doc,
        biddingPrice, // Adding the price field
      };
    })
  );

  res.status(200).json(productsWithPrices);
});

const getAllProducts = asyncHandler(async(req,res) => {
  const products=await Product.find({}).sort("-createdAt").populate("user");
  /*const productsWithDetails = await Promise.all(
    products.map(async (product) => {
      const latestBid = 
    })
  )*/
  res.json(products);
});

const deleteProduct = asyncHandler(async(req,res) => {
  const { id }=req.params;
  const product= await Product.findById(id);

  if(!product){
    res.status(404);
    throw new Error("Product not found");
  }

  if(product.user?.toString()!==req.user.id ){
    res.status(401);
    throw new Error("User not authorized");
  }

  if(product.image && product.image.public_id){
    try {
      await cloudinary.uploader.destroy(product.image.public_id)
    } catch (error) {
      console.log(error)
      res.status(500);
    throw new Error("Error deleting image from cloudinary");
    }
  }

  await Product.findByIdAndDelete(id);
  res.status(200).json({message:"Product deleted successfully"});

});

module.exports ={
    createProduct,getAllProducts,deleteProduct,updateProduct,getAllProductsByAdmin,deleteProductsByAdmin,getProduct,
}