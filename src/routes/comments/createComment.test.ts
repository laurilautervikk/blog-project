import axios from 'axios';
const endpoint = 'http://localhost:3000/comments/';

describe('create a category', () => {
  let newId: string;

  it('it should create a new comment successfully', async () => {
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

    newId = responseData.id;

    expect(responseData.title).toEqual(testData.title);
    expect(responseData.content).toEqual(testData.content);

    return;
  });

  afterAll(async () => {
    // clean up thest category
    const response = await axios.delete(endpoint + newId);
  });
});
