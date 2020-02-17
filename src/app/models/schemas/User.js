import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  user.password = await bcrypt.hash(user.password, 8);

  return next();
});

export default mongoose.model('User', UserSchema);
