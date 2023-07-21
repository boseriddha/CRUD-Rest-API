import express from "express";

import { register } from "../controllers/authentication";

const authentication = (router: express.Router) => {
  router.post("/auth/register", register);
};

export default authentication;
