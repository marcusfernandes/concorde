import mongoose from 'mongoose';

const DomainSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    expiration_dt: {
      type: Date,
      required: false,
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

export default mongoose.model('Domain', DomainSchema);
