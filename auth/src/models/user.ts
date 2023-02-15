import mongoose from 'mongoose';
import { Password } from '../services/password';


// Describes required props for new User creation
interface UserAttrs {
    email: string;
    password: string;
}

// Describes properties that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// Describes the props that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    // createdAt: string;
    // updatedAt: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };

