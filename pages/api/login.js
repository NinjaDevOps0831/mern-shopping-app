import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectDb()

export default async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1) check if user exists with the provided email
        const user = await User.findOne({ email }).select('+password')
        // 2) if not, return error
        if(!user) {
            return res.status(404).send("not user exists with that email")
        }
        // 3) check to see if user's password matches the on in db
        const passwordsMatch = await bcrypt.compare(password, user.password)
        // 4) if so, generate a token
        if(passwordsMatch) {
            const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {
                expiresIn: '7d'
            })
            // 5) send that token to the client
            res.status(200).json(token)
        } else {
            // 401 - not authenticate
            return res.status(401).send("Passwords do not match")
        }
    } catch(error) {
        console.error(error)
        return res.status(500).send("Error logging in user")
    }
}