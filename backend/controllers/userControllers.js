import userModel from '../models/userModel.js';
import generateToken from '../config/generateToken.js';

const registerUser = async (req, res) => {
    const { name, email, password, avatar } = req.body;
    console.log(req.body);

    if (!name || !email || !password) {
        return res.status(400).json({
            error: 'Please fill in all fields'
        });
    }

    const userExists = await userModel.findOne({ email });
    if (userExists) {
        return res.status(400).json({
            error: 'User already exists'
        });
    }

    try {
        const newUser = await userModel.create({
            name,
            email,
            password,
            avatar
        });

        console.log(newUser);
        const token = generateToken(newUser._id);

        return res.status(201).json({
            message: 'User created successfully',
            token
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Server Error'
        });
    }
};


export default registerUser;
