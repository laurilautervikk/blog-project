import { createConnection, ConnectionOptions } from 'typeorm';
import config from '../config/config.json';

export async function openDatabaseConnection() {
  //await closeDatabaseConnection();
  /* const option: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'blog',
    entities: [''],
    synchronize: true
  }; */

  const conn = await createConnection({
    type: 'mysql',
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password
  });
  if (!conn.isConnected) {
    throw new Error('Connection to datbase failed');
  }
  return conn;
}
