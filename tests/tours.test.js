import request from 'supertest';
import app from '../app.js';
import Tour from '../models/tourModels.js';
import { tour1, tour2, tour3  } from './fixtures/data.js';
import { dropDB, dbConnect } from "./fixtures/db.js";


let mongoServer = null;

beforeEach(async () => {
  await dbConnect()
});

afterEach(async () => {
  await dropDB()
});

test('Should create one tour', async () => {
});

test('Should Not Create Tour if Not Admin', () => {})
test('Should Create Tour if Admin or Lead', () => {})
test('Should fetch All Tour', () => {})
test('Should fetch One Tour', () => {})
test('Should fetch top 5 cheap tour', () => {})
test('Should fetch tour stats', () => {})
test('Should fetch tours within distance', () => {})
test('Should fetch distances ', () => {})
test('Should Upload Images in a tour', () => {})
test('Should Delete A Tour', () => {})


