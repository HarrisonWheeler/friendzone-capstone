import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { gameService } from '../services/GameService'



//PUBLIC
export class GamesController extends BaseController {
  constructor() {
    super("api/games")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .delete('/:id', this.delete)
  }


  async getAll(req, res, next) {
    try {
      //only gets user by user who is logged in
      let data = await gameService.getAll(req.userInfo.email)
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await gameService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await gameService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }
  async delete(req, res, next) {
    try {
      await gameService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}