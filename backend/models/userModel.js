import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://storage.googleapis.com/sticker-prod/RhxqmL4IFuxXNHn3VJco/0.png'
    }
},
{
    timestamps: true,
}
)

const userModel = mongoose.model('userModel', userSchema);
export default userModel;