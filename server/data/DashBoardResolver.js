import env from '../env';
import co from 'co';
import mongoFactory from 'mongo-factory';

export const queryNumber = co.warp(function* (root, fields) {
    let db = yield mongoFactory.getConnection(env.MongoDbUrl);
    let col = db.collection('hello');
    let doc = yield col.find('');
    console.log(doc);
    return doc;
});