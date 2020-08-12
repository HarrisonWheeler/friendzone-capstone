import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId


const TagsSchema = new Schema({
  consoles: [{ type: String, required: false, enum: ["playstation", "xbox", "pc", "nintendo"] }],
  gamertags: [{
    pc: "",
    xbox: "",
    playstation: "",
    nintendo: ""
  }]
})

const User = new Schema({
  followers: { type: ObjectId, required: false },
  games: { type: ObjectId, required: false },
  tags: [{ type: TagsSchema }],
  rep: { type: Number, required: false, default: 0 },
  username: { type: String, required: false },
  profilePicture: { type: String, required: false },
  videoClip: { type: String, required: false },
  firstTimeUser: { type: Boolean, default: true },
  subs: [{ type: String, unique: true }],
  email: { type: String, lowercase: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String },
  newUser: { type: Boolean, default: true }
}, { timestamps: true, toJSON: { virtuals: false } })

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