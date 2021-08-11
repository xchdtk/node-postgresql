import * as express from "express";

const router:express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.send("행복하당")
})

export { router };