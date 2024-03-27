import userModel from '../models/userModel.js'
import generateToken from '../config/generateToken.js'

const registerUser = async (req, res) => {
    
    const {name, email, password, avatar} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            error: 'Please fill in all fields'
        });

        const userExists = await userModel.findOne({ email});
        if(userExists){
            return res.status(400).json({
                error: 'User already exists'
            });
        }
        const newUser = await userModel.create({
             name,
             email,
             password,
             avatar,
             token : generateToken(newUser._id)
        });

        if(newUser){
            return res.status(201).json({
                message: 'User created successfully'
            })
        }
        else{
            return res.status(400).json({
                error: 'User not created'
            })
        }
    }

};

export default registerUser;