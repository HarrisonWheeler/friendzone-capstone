import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";


export class ProfilesController extends BaseController {


  constructor() {
    super("api/profile");
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/find", this.findProfiles) // search in nav bar
      .get("/:id", this.getUserProfile)
      .get("", this.getProfiles)
      .get('/user/:id', this.getById)
      .get('/name/:query', this.getByName)
      .get('/:id/followers', this.getFollowers)
      .get("/games/:gameId/users", this.showFollowedGames)
      .put("/:id", this.edit)
      .put("/:id/votes", this.editRep)
      .put("/:id/following", this.editFollowers)
      .post('', this.create)
      .post('/:id/games', this.followGame)
      .delete('/:id/games/:gameId', this.unfollowGame)
      .delete("/:id/following/:followingId", this.deleteFollower)
      .delete('/:id', this.delete)
  }


  async getFollowingNames(req, res, next) {
    try {
      let data = await profilesService.getFollowingNames(req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  async getByName(req, res, next) {
    try {
      let name = req.params.query
      let data = await profilesService.getByName(name)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async findProfiles(req, res, next) {
    try {
      let profiles = await profilesService.findProfiles(req.query.q)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }
  async getProfiles(req, res, next) {
    try {
      let profile = await profilesService.getProfiles();
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async getFollowers(req, res, next) {
    try {
      let followers = await profilesService.getFollowers(req.params.id);
      res.send({ data: followers });
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await profilesService.getById(req.params.id)
      res.send(data)
    } catch (error) { next(error) }
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await profilesService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.user.sub;
      let data = await profilesService.updateProfile(req.userInfo, req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async editRep(req, res, next) {
    try {
      let data = await profilesService.editRep(req.params.id, req.body)
      res.send(data)
    } catch (error) { next(error) }
  }

  async editFollowers(req, res, next) {
    try {
      let data = await profilesService.editFollowers(req.params.id, req.body)
      res.send(data)
    } catch (error) { next(error) }
  }
  async deleteFollower(req, res, next) {
    try {
      let data = await profilesService.deleteFollower(req.params.id, req.params.followingId)
      res.send(data)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      await profilesService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
  async followGame(req, res, next) {
    try {
      res.send(await profilesService.followGame(req.params.id, req.body))
    } catch (error) {
      if (error.code == 11000) {
        res.status(204).send()
        return
      }
      next(error)
    }
  }
  async unfollowGame(req, res, next) {

    try {
      // @ts-ignore
      res.send(await profilesService.unfollowGame(req.params.id, req.params.gameId))
    } catch (error) {
      next(error)
    }
  }
  async showFollowedGames(req, res, next) {
    try {
      let data = await profilesService.showFollowedGames(req.params.gameId)
      res.json({ data: data })
    } catch (error) {
      next(error)
    }
  }
}
