import {Router} from 'https://deno.land/x/oak/mod.ts';
import getTodos from './get.js';
import postTodo from './post.js';
import deleteTodo from './delete.js';
import updateTodo from './put.js';

const router = new Router();

router.get('/',({response})=>{
	response.body = 'Todo List API'
});

router.get('/todos', getTodos);

router.post('/todos',postTodo);
router.delete('/todos/:id',deleteTodo);
router.put('/todos/:id',updateTodo);
export default router;