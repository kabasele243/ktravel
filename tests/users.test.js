import request from 'supertest';
import app from '../app.js';
import User from '../models/userModel.js';
import { dropDB, dbConnect } from "./fixtures/db.js";
import { user1 } from './fixtures/data.js'
import { signToken } from './fixtures/utils.js'

let mongoServer = null;

beforeEach(async () => {
  await dbConnect()
});

afterEach(async () => {
  await dropDB()
});

test('Should signup a new user', async () => {
  
  const response = await request(app).post('/api/v1/users/signup').send(user1);
  let token = signToken(response.body.data.user._id)
  const user = await User.findById(response.body.data.user._id).select('+password')

      expect(user).not.toBeNull()
      expect(response.body.token).toEqual(token);
      expect(response.body.data.user.name).toEqual(user1.name);
      expect(response.body.data.user.email).toEqual(user1.email);
      expect(response.body.data.user.role).toEqual('user');
      expect(response.body.data.user.password).not.toBe(user1.password)
    
})

test('Should Login an Existing User', async () => {

})

test('Should Not Login an Nonexisting User ', async () => {

})

test('Should get a profile user', async() => {

})

