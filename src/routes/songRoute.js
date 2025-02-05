import { Router } from "express";
import { uploadAudio } from "../middlewares/uploadFile";
import { addSong } from "../controllers/songController";
import { auth } from "../middlewares/auth";
const songRouter = Router();

songRouter.post("/add-song", auth,uploadAudio.single("audioFile"), addSong);


export default songRouter;