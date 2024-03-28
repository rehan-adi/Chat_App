import expres from 'express';
import protect from '../middlewere/authMiddlewere.js';
import accessChat from '../controllers/chatControllers.js';
import fetchChat from '../controllers/fetchChat.js'

const router = expres.Router();

router.post('/', protect, accessChat);
router.get('/', protect, fetchChat);
router.post('/group', protect, createGroupChat);
// router.put('/rename', protect, renameGroupChat);
// router.put('/groupremove', protect, removeFromGroupe);
// router.put('/groupadd', protect, addToGroupe);

export default router;