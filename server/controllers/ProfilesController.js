import express from "express";
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";


export class ProfilesController extends BaseController {


  constructor() {
    super("api/profile");
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get("/:id", this.getUserProfile)
      .get("", this.getProfiles)
      .get(":/id/games", this.getProfileGames)
      .get('/:id', this.getById)
      .get('/name/:query', this.getByName)
      .put("/:id", this.edit)
      .put("/:id/votes", this.editRep)
      .put('/:id', this.edit)
      .put("/:id/following", this.editfollowers)
      .post('', this.create)
      .post('/:id/games', this.followGame)
      .delete('/:id', this.delete)
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
  async getProfiles(req, res, next) {
    try {
      let profile = await profilesService.getProfiles();
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async getProfileGames(req, res, next) {
    try {
      let res = await profilesService.getProfileGames(req.params.id)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await profilesService.getById(req.params.id)
      return res.send(data)
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

  async editfollowers(req, res, next) {
    try {
      let data = await profilesService.editFollowers(req.params.id, req.body)
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
      await profilesService.followGame(req.params.id, req.body)
    } catch (error) {
      next(error)
    }
  }
}
