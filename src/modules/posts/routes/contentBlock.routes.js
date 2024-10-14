import { Router } from "express";
import { controller } from "../controllers/contentBlock.controller.js";

export const router = Router();

router.get('/list', controller.getContentBlocksList);

router.get('/types', controller.getContentBlockTypes);

router.get('/:id', controller.getContentBlock);

router.post('/:postId', controller.addContentBlock);

router.put('/:id', controller.updateContentBlock);

router.delete('/:id', controller.deleteContentBlock);
