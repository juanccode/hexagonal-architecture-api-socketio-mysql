import express from 'express';
import { UserController } from './userController.js';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.index.bind(userController));
router.get('/:id', userController.show.bind(userController));
router.post('/', userController.create.bind(userController));
router.put('/:id', userController.update.bind(userController));
router.delete('/:id', userController.delete.bind(userController));

export default router;