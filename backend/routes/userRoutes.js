import express from 'express';
import registerUser from '../controllers/userControllers.js'
import authUser from '../controllers/userAuth.js'
import allUser from '../controllers/allUserController.js'
import protect from '../middlewere/authMiddlewere.js'

const router = express.Router();


router.post('/', registerUser);
router.get('/', protect, (req, res) => {
    allUser(req, res);
});

router.post('/login', authUser);


export default router;