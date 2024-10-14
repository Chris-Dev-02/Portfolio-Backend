import { Router } from "express";
import { controller } from "../controllers/post.controller.js";

export const router = Router();


router.get('/list', controller.getPostsList);

router.get('/types', controller.getPostTypes);

router.get('/publishedStates', controller.getPublishedStates);

router.get('/:id', controller.getPost);

router.post('/', controller.addPost);

router.put('/:id', controller.updatePost);

router.delete('/:id', controller.deletePost);