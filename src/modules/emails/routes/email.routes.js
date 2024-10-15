import { Router } from "express";
import { controller } from "../controllers/email.controller.js";
import { body } from "express-validator";

export const router = Router();

router.post('/contact', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('message').isEmpty().withMessage('Message cannot be empty')
], controller.sendAndSaveEmail);