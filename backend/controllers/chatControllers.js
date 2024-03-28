import chatModel from '../models/chatModel.js';

const accessChat = async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log('No userId');
        return res.status(400).send('No userId provided');
    }

    try {
        let isChat = await chatModel.find({
            isGroupChat: false,
            $and: [
                { users: { $elemMatch: { $eq: req.userId } } },
                { users: { $elemMatch: { $eq: userId } } }
            ]
        }).populate('users', '-password').populate('latestMessage');

        isChat = await chatModel.populate(isChat, {
            path: 'latestMessage.sender',
            select: 'name avatar email'
        });

        if (isChat.length > 0) {
            return res.send(isChat[0]);
        } else {
            const newChat = new chatModel({
                chatName: "sender",
                isGroupChat: false,
                users: [req.userId, userId],
            });

            const createdChat = await newChat.save();
            const fullChat = await chatModel.findOne({ _id: createdChat._id }).populate('users', '-password');
            return res.status(200).send(fullChat);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

export default accessChat;
