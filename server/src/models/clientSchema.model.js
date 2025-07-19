import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    companyMail: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    services: {
      type: [String],
    },
    projectDescription: {
      type: String,
    },
  },
  { timeStamps: true },
);

const Client = mongoose.model("Client", clientSchema);

export default Client;
