import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const ConsoleSchema = new Schema({
  pc: { type: String, default: "" },
  xbox: { type: String, default: "" },
  playstation: { type: String, default: "" },
  nintendo: { type: String, default: "" }
})

const Profile = new Schema(
  {

    following: [{ type: ObjectId, required: false }],
    games: { type: ObjectId, required: false },
    consoles: { type: ConsoleSchema },
    rep: { type: Number, required: false, default: 0 },
    profilePicture: { type: String, required: false },
    videoClip: { type: String, required: false },
    firstTimeUser: { type: Boolean, default: true },
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String, default: "https://i1.pngguru.com/preview/760/394/363/company-idolmster-project-lacrosse-xbox-360-management-skill-idolmaster-png-clipart-thumbnail.jpg" },
    votedNames: [{ type: String, unique: true }]
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
