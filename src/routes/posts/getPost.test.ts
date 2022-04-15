import axios from 'axios';
const endpoint = 'http://localhost:3000/posts/';

describe('get post by ID', () => {
  let newId: String;

  beforeAll(async () => {
    //create a dummy post first
    const testData = {
      authorId: '05af4060-059e-418d-bfe9-0ef18e855471',
      title: 'Title getPost test',
      summary: 'Summary getPost test',
      content: 'Content getPost test'
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

  it('should return post by ID', async () => {
    const response = await axios.get(endpoint + newId);
    expect(response?.data?.title).toEqual('Title getPost test');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + 'nothing');
    const data = response.data;
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no post found with given ID');
    return;
  });

  afterAll(async () => {
    // clean up thest post
    const response = await axios.delete(endpoint + newId);
  });
});
