import chatModel from '../models/chatModel.js'


const fetchChat = async (req, res) => {
    try {
        chatModel.find({users: {$eleMatch:{$eq:req.users._id}}})
        .populate("users", "-password")
        .populate("groupeAdmin", "-password")
        .populate("latestMessage")
        .sort({updateAt: -1})
        .then(async (result) => {
            result = await chatModel.populate(isChat, {
                path: "latestMessage.sender",
                select: "name avatar email",
            } )
            res.status(200).json(result)
        })
    } catch (error) {
        res.status(400);
        console.log(error);
    }
}

export default {
    fetchChat
}