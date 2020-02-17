import 'dotenv/config';

import express from 'express';
import routes from './routes';
import 'express-async-errors';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  // excpetionHandler(){
  //   this.server.use(async (err, req, res, next) =>{

  //   })
  // }
}

export default new App().server;
