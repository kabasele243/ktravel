import { Router } from 'express';
import { 
  uploadUserPhoto,
  resizeUserPhoto,
  getMe,
  updateMe,
  deleteMe,
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser } from '../resolvers/userResolver.js';
import { 
  signup, 
  login, 
  logout, 
  forgotPassword, 
  resetPassword, 
  updatePassword, 
  protect, 
  restrictTo } from '../resolvers/authResolver.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch('/updateMyPassword', updatePassword);
router.get('/me', getMe, getUser);
router.patch(
  '/updateMe',
  uploadUserPhoto,
  resizeUserPhoto,
  updateMe
);
router.delete('/deleteMe', deleteMe);

router.use(restrictTo('admin'));

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);


export default router;
