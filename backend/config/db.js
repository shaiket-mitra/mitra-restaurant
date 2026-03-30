import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tomato-food-del-admin:IXfkvBehU9WISd1u@cluster0.hmus9.mongodb.net/tomato-food-del",
    );
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connection Failed", error);
  }
};
