import axios from 'axios';
const endpoint = 'http://localhost:3000/comments/';

describe('get comment by ID', () => {
  let newId: string;

  beforeAll(async () => {
    //create a dummy comment first
    const testData = {
      postId: 'df2c15c1-7c3c-428d-86db-bad0a73741e9',
      title: 'Title getcomment test',
      content: 'Content getcomment test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    //get the id from dummy comment response
    newId = responseData.id;
  });

  it('should return comment by ID', async () => {
    const response = await axios.get(endpoint + newId);
    expect(response.status).toBe(200);
    expect(response?.data?.title).toEqual('Title getcomment test');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + 'nothing');
    const result = response.data;
    expect(result?.message).toEqual('no comment found with ID: nothing');
    return;
  });

  afterAll(async () => {
    // clean up
    const response = await axios.delete(endpoint + newId);
  });
});
