import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const MessageSchema = new Schema({
  id: { type: ObjectId, required: true },
  content: { type: String, required: true }
})

const Message = new Schema(
  {
    gameId: { type: String, required: true },
    creator: [{ type: MessageSchema }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Message;
