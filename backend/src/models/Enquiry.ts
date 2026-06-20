import mongoose, { Document, Schema } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
}, { timestamps: true });

export const Enquiry = mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
