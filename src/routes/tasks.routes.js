import { Router } from 'express';
import TasksController from '../controllers/tasks.controller.js';

const router = Router();

router.get('/', TasksController.getAll);
router.post('/', TasksController.create);
router.put('/:id', TasksController.update);
router.delete('/:id', TasksController.delete);

export default router;