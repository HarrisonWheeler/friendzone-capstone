import mongoose from "mongoose"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId


const Games = new Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  platforms: [{ type: String }],
  ratings: { type: Number, required: true },
  backgroundImg: { type: String, required: false },
  clip: { type: String, required: false },
  genre: { type: String, required: true },
  gameId: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  followers: { type: Number, required: true, default: 0 }
}, { timestamps: true, toJSON: { virtuals: false } })


Games.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })

//CASCADE ON DELETE
Games.pre('deleteMany', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    //something like...
    //dbContext.Task.deleteMany({ listId: this._conditions_id }),
  ])
    .then(() => next())
    .catch(err => next(err))
})

//CASCADE ON DELETE
Games.pre('findOneAndRemove', function (next) {
  //lets find all the lists and remove them
  Promise.all([
    // dbContext.Task.deleteMany({ boardId: this._conditions._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})

export default Games