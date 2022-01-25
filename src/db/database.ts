import { createConnection, ConnectionOptions } from 'typeorm';

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

  const conn = await createConnection();
  if (!conn.isConnected) {
    throw new Error('Connection to datbase failed');
  }
  return conn;
}
