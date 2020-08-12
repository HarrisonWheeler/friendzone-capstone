import mongoose from "mongoose";
import MessageSchema from "../models/Message";
import ProfileSchema from "../models/Profile";
import UserSchema from '../models/User'
import GamesSchema from "../models/Games"

class DbContext {

  Games = mongoose.model("Games", GamesSchema)
  Message = mongoose.model("Value", MessageSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  User = mongoose.model("User", UserSchema)
}

export const dbContext = new DbContext();
