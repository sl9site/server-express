import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';

const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById); // GET http://localhost:5000/user/6056ebab2e3c27fead4aee39
router.patch('/:userId', userUpdateById); // PATCH http://localhost:5000/user/6056ebab2e3c27fead4aee39
router.delete('/:userId', userDeleteById); // DELETE http://localhost:5000/user/6056ebab2e3c27fead4aee39

export default router;