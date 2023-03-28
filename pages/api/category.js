// import products from '../../static/products.json'
import Product from '../../models/Product'
import connectDb from '../../utils/connectDb'

connectDb();

export default async (req, res) => {
    const { category } = req.query
    const products = await Product.find({ category: category})
    res.status(200).json(products)
}