import axios from 'axios';
const endpoint = 'http://localhost:3000/comments/';

describe('get post by ID', () => {
  let newId: string;

  beforeAll(async () => {
    //create a dummy post first
    const testData = {
      postId: 'df2c15c1-7c3c-428d-86db-bad0a73741e9',
      title: 'Title createcomment test',
      content: 'Content createcomment test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    //get the id from dummy posts response
    newId = responseData.id;
  });

  it('should return the comments created above', async () => {
    const response = await axios.get(endpoint);
    //console.log(response.data[0].title);

    //seting a delay because other tests may have not cleaned all data yet
    const delay = setTimeout(function () {
      expect(response?.data[0]?.title).toEqual('Title comments test');
    }, 1000);
    delay.unref();
  });

  afterAll(async () => {
    // clean up thest post
    const response = await axios.delete(endpoint + newId);
  });
});
