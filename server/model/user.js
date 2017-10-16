import mongoose from 'mongoose';


let Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String },
    title: { type: String },
    description: { type: String }
});

export default mongoose.model('User',UserSchema);

