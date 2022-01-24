import http from 'http';
import App from './app';

const httpServer = http.createServer(App);

httpServer.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
