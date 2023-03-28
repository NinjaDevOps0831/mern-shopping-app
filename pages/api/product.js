import Product from '../../models/Product';
import Cart from '../../models/Cart';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    switch(req.method) {
        case "GET": 
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case 'DELETE':
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`) // no method or not allowed
            break;
    }
}

async function handleGetRequest(req, res) {
    const { _id } = req.query
    const product = await Product.findOne({ _id: _id })
    res.status(200).json(product);
}

async function handlePostRequest(req, res) {
    const {name, category, price, description, mediaUrl} = req.body
    try {
        if(!name || !category || !price || !description ||!mediaUrl) {
            return res.status(422).send('Product missing one or more fields') 
            // when user hasn't include required information
        }
        
        const product = await new Product({
            name,
            category,
            price,
            description,
            mediaUrl
        }).save()
        res.status(201).json(product) // new source created
    } catch(error) {
        console.error(error);
        res.status(500).send('Server error creating product');
    }
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query
    try {
        // delete product by id
        await Product.findOneAndDelete({ _id: _id })
        // remove product from all carts, referenced as 'product'
        await Cart.updateMany(
            { "products.product": _id },
            { $pull: {products: { product: _id }} }
        ) 
    } catch(error) {
        console.error(error)
        res.status(500).send('Error deleting product')
    }
    res.status(204).json({}) // success code
}