const mongoose =require("mongoose")

const studentchema = new mongoose.Schema(
  {
    roll: { type: String, required: true },
    batch: { type: String, required: true },
    userId:{
       type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }
  },
  {
      versionKey:false,
      timestamps:true
  }
);
const Student=mongoose.model("student",studentchema)

module.exports=Student