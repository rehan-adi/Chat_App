import userModel from '../models/userModel.js';
import  generateToken from '../config/generateToken.js';

const authUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Please provide email and password' });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        const token = generateToken(user._id);

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

export default authUser;
