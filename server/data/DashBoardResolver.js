import env from '../env';
import co from 'co';
import mongoose from 'mongoose';

export const queryNumber = co.warp(function* (root, fields) {
    let db = yield mongoose.createConnection(env.MongoDbUrl);
});