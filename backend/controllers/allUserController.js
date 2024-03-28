import userModel from '../models/userModel.js';

const allUser = async (req, res) => {
    const keyword = req.params.search ? {
        $or : [
            {name: { $regex: req.query.search, $options: "i"}},
            {email: { $regex: req.query.search, $options: "i"}},
        ]
    }:
    {};

    const users = await userModel.find(keyword).find({_id: {$ne: req.userModel.id}});
    res.send(users);
};

export default {
    allUser
}