import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const User = new Schema({
  followers: { type: ObjectId, required: false },
  games: { type: ObjectId, required: false },
  creatorEmail: { type: String, required: true },
  tags: [{ type: String, enum: ["playstation", "xbox", "pc", "nintendo"] }],
  rep: { type: Number, required: true },
  username: { type: String, required: true },
  profilePicture: { type: String, required: false },
  videoClip: { type: String, required: false }
}, { timestamps: true, toJSON: { virtuals: true } })

User.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

//CASCADE ON DELETE
// User.pre('findOneAndRemove', function (next) {
//   //lets find all the lists and remove them
//   Promise.all([
//     dbContext.List.deleteMany({ boardId: this._conditions._id })
//   ])
//     .then(() => next())
//     .catch(err => next(err))
// })

export default User