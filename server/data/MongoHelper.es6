export var db = null;
export var passwdCol = null;
export var userCol = null;
export var familyCol = null;
export var bookMetaCol = null;
export var bookTagCol = null;
export function updateDb(_db) {
    db = _db;
    passwdCol = db.collection('passwd');
    userCol = db.collection('user');
    familyCol = db.collection('family');
    bookMetaCol = db.collection('bookmeta');
    bookTagCol = db.collection('booktag');
};