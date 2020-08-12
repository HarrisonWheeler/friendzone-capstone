import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class UserService {
  async getAll(userEmail) {
    return await dbContext.User.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.User.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.User.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.User.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.User.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user");
    }
  }

}


export const userService = new UserService()