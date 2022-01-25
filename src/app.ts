import express from 'express';
//import { Connection, createConnection, ConnectionOptions } from 'typeorm';
const App = express();
App.use(express.json());

App.get('/users', async (req, res) => {});

App.get('/', (req, res) => {
  res.json({ message: 'hello!' });
});

export = App;
