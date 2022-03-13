const mongoose =require("mongoose")


const batchSchema = new mongoose.Schema(
  {
    batchName: { type: String, required: true },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
  },
  {
      versionKey:false,
      timestamps:true
  }
);
const Batch=mongoose.model("batch",batchSchema)

module.exports=Batch