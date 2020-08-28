import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const ConsoleSchema = new Schema({
  pc: { type: String, default: "" },
  xbox: { type: String, default: "" },
  playstation: { type: String, default: "" },
  nintendo: { type: String, default: "" }
})

const GameSchema = new Schema({
  name: { type: String, required: true },
  gameId: { type: String, required: true, unique: true },
  backgroundImg: { type: String, required: true },
})
const VotedSchema = new Schema({
  name: { type: String, required: true },
  voteType: { type: Number, required: true }
})
const Profile = new Schema(
  {

    following: [{ type: ObjectId, ref: "Profile", required: false }],
    games: [GameSchema],
    consoles: { type: ConsoleSchema },
    rep: { type: Number, required: false, default: 0 },
    profilePicture: { type: String, required: false },
    videoClip: { type: String, required: false },
    firstTimeUser: { type: Boolean, default: true },
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String, default: "https://lh3.googleusercontent.com/proxy/Q1lEAHblBW7fiO3AUQuhsni_J3_dkQGwmfyjUI8DgkNodX3DAfSRlyZtS1XKKP18xSv_v_To8zKQtwwDve9_j2wGBCECYZL0bg_WgPJRmB2QWVrSa8R7YjYLOApbj3prPtPXUoLnproe" },
    voted: [{ type: VotedSchema }]

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
