import { Router } from 'express';
import multer from 'multer';
import configMulter from './config/multer';

import DomainController from './app/controllers/DomainController';
import UserController from './app/controllers/UserController';

const routes = new Router();
const upload = multer(configMulter);

// Session

// Domain
routes.get('/domain', DomainController.index);
routes.post('/domain', upload.single('file'), DomainController.store);

// User
routes.post('/user', UserController.store);

export default routes;
