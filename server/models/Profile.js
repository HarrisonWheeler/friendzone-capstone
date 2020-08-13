import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

const ConsoleSchema = new Schema({
  pc: { type: String, default: "" },
  xbox: { type: String, default: "" },
  playstation: { type: String, default: "" },
  nintendo: { type: String, default: "" }
})

const Profile = new Schema(
  {
    followers: { type: ObjectId, required: false, default: 0 },
    following: { type: ObjectId, required: false, default: 0 },
    games: { type: ObjectId, required: false, default: 0 },
    consoles: { type: ConsoleSchema },
    rep: { type: Number, required: false, default: 0 },
    profilePicture: { type: String, required: false },
    videoClip: { type: String, required: false },
    firstTimeUser: { type: Boolean, default: true },
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String, default: "//placehold.it/150x150" },
    // NOTE If you wish to add additional public properties for profiles do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Profile.virtual("creator",
  {
    localField: "creatorEmail",
    ref: "Profile",
    foreignField: "email",
    justOne: true
  })


export default Profile;
