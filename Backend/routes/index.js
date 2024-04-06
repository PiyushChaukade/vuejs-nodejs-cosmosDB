import express from 'express';
const router = express.Router();
import TodoListController from '../controllers/todolist.js';

router.post('/addtodo',TodoListController.createTodoList);
router.get('/fetchtodo',TodoListController.fetchTodoList);
router.put('/updatetodo/:id',TodoListController.updateTodoList);
router.delete('/deletetodo/:id',TodoListController.deleteTodoList);

export default router;