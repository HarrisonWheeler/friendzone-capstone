import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class GameService {
  async getAll(userEmail) {
    return await dbContext.Games.find({ creatorEmail: userEmail }).populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Games.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.Games.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Games.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Games.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user");
    }
  }

}


export const gameService = new GameService()