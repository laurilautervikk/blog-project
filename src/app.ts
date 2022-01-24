import express from 'express';
import { Connection, createConnection, ConnectionOptions } from 'typeorm';
const App = express();

export async function openDatabaseConnection() {
  //await closeDatabaseConnection;
  const option: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'blog'
  };

  const conn = await createConnection(option);
  if (conn.isConnected) {
    throw new Error('Connectio nto datbase failed');
  }
  return conn;
}

App.get('/users', async (req, res) => {});

App.get('/', (req, res) => {
  res.json({ message: 'hello!' });
});

export = App;
