import express from 'express';
//import { Connection, createConnection, ConnectionOptions } from 'typeorm';
import router from './routes/index';
const App = express();
App.use(express.json());

App.use(router);

App.get('/', (req, res) => {
  res.json({ message: 'hello!' });
});

export = App;
