import { Request, Response } from 'express';
import { enquirySchema } from '../schemas/enquirySchema';
import { Enquiry } from '../models/Enquiry';
import mongoose from 'mongoose';

export const createEnquiry = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = enquirySchema.parse(req.body);

    // Save to database only if connected (optional fallback)
    if (mongoose.connection.readyState === 1) {
      const newEnquiry = new Enquiry(validatedData);
      await newEnquiry.save();
    } else {
      console.log("Memory mode: Enquiry received but not saved to DB.", validatedData);
    }

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully"
    });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors
      });
    }

    console.error("Error creating enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
