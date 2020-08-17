import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

// Private Methods

/**
 * Creates profile if one does not exist
 * @param {any} profile
 * @param {any} user
 */
async function createProfileIfNeeded(profile, user) {
  if (!profile) {
    profile = await dbContext.Profile.create({
      ...user,
      firstTimeUser: true,
      subs: [user.sub]
    });
  }
  return profile;
}

/**
 * Adds sub to profile if not already on profile
 * @param {any} profile
 * @param {any} user
 */
async function mergeSubsIfNeeded(profile, user) {
  if (!profile.subs.includes(user.sub)) {
    // @ts-ignore
    profile.subs.push(user.sub);
    await profile.save();
  }
}
/**
 * Restricts changes to the body of the profile object
 * @param {any} body
 */
// function sanitizeBody(body) {
//   let writable = {
//     name: body.name,
//     phones: body.phones,
//     addresses: body.addresses,
//     picture: body.picture,
//     firstTimeUser: body.firstTimeUser,
//     rep: body.rep,
//     videoClip: body.videoClip,
//     consoles: body.consoles
//   };
//   return writable;
// }

class ProfileService {

  async followGame(id, body) {
    // REVIEW get the profile and check if they already have the game

    return await dbContext.Profile.findByIdAndUpdate({ _id: id },
      { $addToSet: { games: { name: body.name, backgroundImg: body.backgroundImg, gameId: body.gameId } } }, { new: true })
  }
  async getByName(name) {
    let friendProfile = await dbContext.Profile.find({
      name: name
    })
    return friendProfile

  }
  /**
   * Provided an array of user emails will return an array of user profiles with email picture and name
   * @param {String[]} emails Array of email addresses to lookup users by
   */
  async getProfiles() {
    return await dbContext.Profile.find()
  }
  async getById(id) {
    let data = await dbContext.Profile.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.Profile.create(rawData)
    return data
  }
  async delete(id, userEmail) {
    let data = await dbContext.Profile.findOneAndRemove({ _id: id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this user");
    }
  }


  /**
   * Returns a user profile from the Auth0 user object
   *
   * Creates user if none exists
   *
   * Adds sub of Auth0 account to profile if not currently on profile
   * @param {any} user
   */
  async getProfile(user) {
    let profile = await dbContext.Profile.findOne({
      email: user.email
    });
    profile = await createProfileIfNeeded(profile, user);
    await mergeSubsIfNeeded(profile, user);
    return profile;
  }
  /**
​    * Updates profile with the request body, will only allow changes to editable fields
​    * @param {any} user Auth0 user object
​    * @param {any} body Updates to apply to user object
​    */
  async editRep(id, body) {
    let val = body.voteType == 'up' ? 1 : -1
    let rep = await dbContext.Profile.findOneAndUpdate(
      { _id: id, votedNames: { $nin: [body.votedNames] } }, { $addToSet: { votedNames: body.votedNames }, $inc: { rep: val } }, { new: true }
    )
    return rep
  }
  async editFollowers(id, body) {
    let followers = await dbContext.Profile.findOneAndUpdate(
      { _id: id }, { $addToSet: { following: body.following } }, { new: true }
    )
    return followers
  }
  async updateProfile(user, body) {
    let update = body
    if (body.name.length > 0) {
      body.firstTimeUser = false
    }
    let profile = await dbContext.Profile.findOneAndUpdate(
      { email: user.email },
      { $set: update },
      { runValidators: true, setDefaultsOnInsert: true, new: true }
    );
    return profile;
  }
}
export const profilesService = new ProfileService();
