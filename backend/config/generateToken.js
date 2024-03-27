import jwt from 'jsonwebtoken';

const generateToken = () => {
    const token = jwt.sign(
        {
            id: 1,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '20d'
        }
    );
    return token;
};

export default generateToken;