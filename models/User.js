import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        unique: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', 'admin', 'root']
        // user: cart & checkout product
        // admin: create and delete product
        // root: all access and ability to change who is admin or not
    }
}, {
    timestamps: true
})

export default mongoose.models.User || mongoose.model("User", UserSchema)